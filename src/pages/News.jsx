import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import NewsCard from '../components/News/NewsCard';

import styles from '../css/News/News.module.css';
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const News = ({db}) => {

    const [currentTab, setCurrentTab] = useState(0);
    const [datas, setDatas] = useState([]);
    const [baseData, setBaseData] = useState({});
    const [isOn, setisOn] = useState(false);
    const [isOnData, setIsOnData] = useState();
    const [postData, setPostData] = useState([]);

    // firebase db 내 newsRef
    const newsRef = collection(db, 'news');

    useEffect(() => {
        const getItems = async () => {
            // newsRef에서 문서들 가져오기 
            const q = query(newsRef, orderBy("date", "desc"));
            const documentSnapshots = await getDocs(q);
            setDatas(documentSnapshots.docs.map((doc) => ({
                ...doc.data()
            })))
        };
        getItems();
    }, []);

    const menuTab = ['전체', '새소식', '공지사항'];

    let navigate = useNavigate();

    useEffect(() => {
        setPostData(datas);
    }, [datas]);

    useEffect(() => {
        setPostData(datas);
        if (currentTab === 1) {
            setPostData(datas.filter((data) => {
                return data.category === 'news'
            }));
        } else if (currentTab === 2) {
            setPostData(datas.filter((data) => {
                return data.category === 'notice'
            }));
        }
    }, [currentTab]);

    const activeMenuHandler = (idx) => {
        setCurrentTab(idx);
    };

    const goNewsDetail = (d) => {
        navigate("/detail", {
            state: {
                title: d.title,
                content: d.contents,
                date: d.date,
                img: d.img,
                link: d.link
            }
        })
    }

    return (
        <main className="main">
            <section
                className={["sections", styles
                    .newsSection]
                    .join(" ")}>
                <div
                    className={["containers", styles
                        .newsContainer]
                        .join(" ")}>
                    <div className={styles.newsTitleBox}>
                        <p className={styles.newsTitle}>
                            새소식
                        </p>
                    </div>
                    <div className={styles.tabMenuBox}>
                        <ul className={styles.tabMenuList}>
                            {
                                menuTab.map((el, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className={`${idx === currentTab
                                                ? styles.activeMenuItem
                                                : styles.menuItem}`}
                                            onClick={() => activeMenuHandler(idx)}>
                                            {el}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.tabContentBox}>
                        <div className={styles.cardList}>
                            {
                                postData.map((data, idx) => {
                                    return (
                                        <NewsCard
                                            key={idx}
                                            img={data.img[0]}
                                            title={data.title}
                                            date={data.date}
                                            handler={() => goNewsDetail(data)}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}

export default News;