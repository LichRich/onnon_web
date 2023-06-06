import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

import styles from '../../css/services/List.module.css';

const List = ({data, handler}) => {

    const [currentTab, setCurrentTab] = useState(0);
    const [datas, setDatas] = useState([{category: []}]);
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

    const serviceRef = '';

    useEffect(() => {
        const getItems = () => {
            console.log(data);
            // setDatas([
            //     {
            //         id: 0,
            //         title: 'dummy',
            //         img: ['img', 'img', 'img', 'img'],
            //         content: '<p>this is dummy content</p>',
            //         organ: 'company',
            //         category: 'service1',
            //         tags: ['tag1', 'tag2', 'tag3'],
            //     }, {
            //         id: 1,
            //         title: 'dummy2',
            //         img: ['img', 'img', 'img', 'img'],
            //         content: '<p>this is dummy content5</p>',
            //         organ: 'university',
            //         category: 'service2',
            //         tags: ['tag1', 'tag2', 'tag3'],
            //     }, {
            //         id: 2,
            //         title: 'dummy3',
            //         img: ['img', 'img', 'img', 'img'],
            //         content: '<p>this is dummy content5</p>',
            //         organ: 'public',
            //         category: 'service1',
            //         tags: ['tag1', 'tag2', 'tag3'],
            //     }, {
            //         id: 3,
            //         title: 'dummy4',
            //         img: ['img', 'img', 'img', 'img'],
            //         content: '<p>this is dummy content5</p>',
            //         organ: 'edu',
            //         category: 'service3',
            //         tags: ['tag1', 'tag2', 'tag3'],
            //     }, {
            //         id: 4,
            //         title: 'dummy5',
            //         img: ['img', 'img', 'img', 'img'],
            //         content: '<p>this is dummy content5</p>',
            //         organ: 'company',
            //         category: 'service2',
            //         tags: ['tag1', 'tag2', 'tag3'],
            //     }
            // ]);
            setDatas(data);
            console.log(datas);
        };
        getItems();
    }, [data])

    useEffect(() => {
        setPostData(datas.filter((data) => {
            return data.category === 'video';
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
                content: '관공서 content',
            },
            {
                title: '기업',
                content: '기업 content',
            },
            {
                title: '대학',
                content: '대학 content',
            },
            {
                title: '교육기관',
                content: '교육기관 content',
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
            } else {
                setPostData(datas.filter((data) => {
                    return data.organ === 'edu';
                }));
            }
        } else {
            // setPostData(datas.filter((data) => {
            //     return data.category.some(v => (v === 'video'));
            // }));

            // if (currentTab === 1) {
            //     setPostData(datas.filter((data) => {
            //         return data.category.some(v => (v === 'web'));
            //     }));
            // } else if (currentTab === 2) {
            //     setPostData(datas.filter((data) => {
            //         return data.category.some(v => (v === 'design'));
            //     }));
            // } else if (currentTab === 3) {
            //     setPostData(datas.filter((data) => {
            //         return data.category.some(v => (v === 'event'));
            //     }));
            // } else if (currentTab === 4) {
            //     setPostData(datas.filter((data) => {
            //         return data.category.some(v => (v === 'solution'));
            //     }));
            // }
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
                                    postData.map((data) => {
                                        return (
                                            <Card
                                                key={data.id}
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