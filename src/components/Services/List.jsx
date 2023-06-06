import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const List = () => {

    const [currentTab, setCurrentTab] = useState(0);
    const [datas, setDatas] = useState([]);
    const [isOrgan, setIsOrgan] = useState(0);
    const [innerMenu, setInnerMenu] = useState([
        {
            title: 'service1',
            content: 'service1 content',
        },
        {
            title: 'service2',
            content: 'service2 content',
        },
        {
            title: 'service3',
            content: 'service3 content',
        },
    ]);
    const [postData, setPostData] = useState([]);

    let navigate = useNavigate();

    const serviceRef = '';

    useEffect(() => {
        const getItems = () => {
            setDatas([
                {
                    id: 0,
                    title: 'dummy',
                    img: '',
                    content: '<p>this is dummy content</p>',
                    organ: 'company',
                    category: 'service1',
                    tags: ['tag1', 'tag2', 'tag3'],
                }, {
                    id: 1,
                    title: 'dummy2',
                    img: '',
                    content: '<p>this is dummy content5</p>',
                    organ: 'university',
                    category: 'service2',
                    tags: ['tag1', 'tag2', 'tag3'],
                }, {
                    id: 2,
                    title: 'dummy3',
                    img: '',
                    content: '<p>this is dummy content5</p>',
                    organ: 'public',
                    category: 'service1',
                    tags: ['tag1', 'tag2', 'tag3'],
                }, {
                    id: 3,
                    title: 'dummy4',
                    img: '',
                    content: '<p>this is dummy content5</p>',
                    organ: 'edu',
                    category: 'service3',
                    tags: ['tag1', 'tag2', 'tag3'],
                }, {
                    id: 4,
                    title: 'dummy5',
                    img: '',
                    content: '<p>this is dummy content5</p>',
                    organ: 'company',
                    category: 'service2',
                    tags: ['tag1', 'tag2', 'tag3'],
                }
            ]);
        };
        getItems();
    }, [])

    useEffect(() => {
        setPostData(datas.filter((data) => {
            return data.category === 'service1';
        }));
    }, [datas]);

    const menuTab = ['분야별', '기관별'];
    const allInnerMenu = [
        [
            {
                title: 'service1',
                content: 'service1 content',
            },
            {
                title: 'service2',
                content: 'service2 content',
            },
            {
                title: 'service3',
                content: 'service3 content',
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
            setPostData(datas.filter((data) => {
                return data.category === 'service1';
            }));

            if (currentTab === 1) {
                setPostData(datas.filter((data) => {
                    return data.category === 'service2';
                }));
            } else if (currentTab === 2) {
                setPostData(datas.filter((data) => {
                    return data.category === 'service3';
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
        <section className="sections listSection">
            <div className="containers listContainer">
                <div className="outerMenuBox">
                    <ul className="outerMenuList">
                        {
                            menuTab.map((el, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className={`${idx === isOrgan
                                            ? "styles.activeMenuItem"
                                            : "styles.menuItem"}`}
                                        onClick={() => clickMenu(idx)}>
                                        {el}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="outerContentBox">
                    <div className="innerMenuBox">
                        <ul className="innerMenuList">
                            {
                                innerMenu.map((el, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className={`${idx === currentTab
                                                ? "styles.activeMenuItem"
                                                : "styles.menuItem"}`}
                                            onClick={() => activeMenuHandler(idx)}>
                                            {el.title}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="innerContentBox">
                        <div className="innerContent">
                            <div className="introBox">
                                {innerMenu[currentTab].content}
                            </div>
                            <div className="innerList">
                                {
                                    postData.map((data) => {
                                        return (
                                            <Card
                                                key={data.id}
                                                img={data.img}
                                                title={data.title}
                                                onclick={() => goProjectDetail(data)}
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