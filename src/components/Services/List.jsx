import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

import styles from '../../css/services/List.module.css';

const List = ({data, handler}) => {

    const [currentTab, setCurrentTab] = useState(0);
    const [datas, setDatas] = useState([]);
    const [isOrgan, setIsOrgan] = useState(0);
    const [innerMenu, setInnerMenu] = useState([
        {
            title: '영상',
            content: '영상 content',
        },
        {
            title: '웹페이지',
            content: '웹페이지 content',
        },
        {
            title: '디자인',
            content: '디자인 content',
        },
        {
            title: '행사',
            content: '행사 content',
        },
        {
            title: '지역문제해결',
            content: '지역문제해결 content',
        },
    ]);
    const [postData, setPostData] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        const getItems = () => {
            setDatas(data);
        };
        getItems();
    }, [data])

    useEffect(() => {
        setPostData(datas.filter((data) => {
            if(data !== undefined) {
                return (data.category.indexOf('video') >= 0);
            }
        }));
    }, [datas]);

    const menuTab = ['분야별', '기관별'];
    const allInnerMenu = [
        [
            {
                title: '영상',
                content: '영상 content',
            },
            {
                title: '웹페이지',
                content: '웹페이지 content',
            },
            {
                title: '디자인',
                content: '디자인 content',
            },
            {
                title: '행사',
                content: '행사 content',
            },
            {
                title: '지역문제해결',
                content: '지역문제해결 content',
            },
        ],
        [
            {
                title: '관공서',
                content: '누구나 즐기고 공감할 수 있는 축제/행사를 기획하고 운영합니다.',
            },
            {
                title: '기업',
                content: '기업의 경쟁력을 최적의 콘텐츠를 통해 시장에 전달합니다.',
            },
            {
                title: '대학',
                content: '대학 내 다양한 행사를 기획하고, 생동감있게 기록합니다.',
            },
            {
                title: '교육기관',
                content: '학생의 눈높이에서 메시지를 전달하고, 스스로 경험하고 느낄 수 있는 교육을 지향합니다.',
            },
        ]
    ];

    const clickMenu = (idx) => {
        setIsOrgan(idx);
        setInnerMenu(allInnerMenu[idx]);
        setCurrentTab(0);
    }

    useEffect(() => {
        if (isOrgan === 1) {
            setPostData(datas.filter((data) => {
                return data.organ === 'public';
            }));
            if (currentTab === 1) {
                setPostData(datas.filter((data) => {
                    return data.organ === 'company';
                }));
            } else if (currentTab === 2) {
                setPostData(datas.filter((data) => {
                    return data.organ === 'university';
                }));
            } else if(currentTab === 3) {
                setPostData(datas.filter((data) => {
                    return data.organ === 'edu';
                }));
            }
        } else {
            setPostData(datas.filter((data) => {
                return (data.category.indexOf('video') >= 0);
            }));

            if (currentTab === 1) {
                setPostData(datas.filter((data) => {
                    return (data.category.indexOf('web') >= 0);
                }));
            } else if (currentTab === 2) {
                setPostData(datas.filter((data) => {
                    return (data.category.indexOf('design') >= 0);
                }));
            } else if (currentTab === 3) {
                setPostData(datas.filter((data) => {
                    return (data.category.indexOf('event') >= 0);
                }));
            } else if (currentTab === 4) {
                setPostData(datas.filter((data) => {
                    return (data.category.indexOf('solution') >= 0);
                }));
            }
        }
    }, [isOrgan, currentTab]);

    const activeMenuHandler = (idx) => {
        setCurrentTab(idx);
    }

    const goProjectDetail = (d) => {
        navigate('/project', {
            state: {
                title: d.title,
                img: d.img,
                content: d.content,
                tags: d.tags,
            }
        })
    }

    return (
        <section className={["sections", styles.listSection].join(' ')}>
            <div className={["containers", styles.listContainer].join(' ')}>
                <div className={styles.outerMenubox}>
                    <ul className={styles.outerMenuList}>
                        {
                            menuTab.map((el, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className={`${idx === isOrgan
                                            ? styles.activeMenuItem
                                            : styles.menuItem}`}
                                        onClick={() => clickMenu(idx)}>
                                        {el}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.outerContentBox}>
                    <div className={styles.innerMenuBox}>
                        <ul className={styles.innerMenuList}>
                            {
                                innerMenu.map((el, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className={`${idx === currentTab
                                                ? styles.activeInnerMenuItem
                                                : styles.innerMenuItem}`}
                                            onClick={() => activeMenuHandler(idx)}>
                                            {el.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.innerContentBox}>
                        <div className={styles.innerContent}>
                            <div className={styles.introBox}>
                                <p className={styles.intro}>{innerMenu[currentTab].content}</p>
                            </div>
                            <div className={styles.innerList}>
                                {
                                    postData.map((data, idx) => {
                                        return (
                                            <Card
                                                key={idx}
                                                img={data.img}
                                                title={data.title}
                                                handler={() => handler(data)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default List;