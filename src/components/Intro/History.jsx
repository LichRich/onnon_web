import React, {useEffect, useState} from "react";
import {data} from './Data';

import styles from '../../css/Intro/History.module.css';

const History = () => {

    const [currentTab, setCurrentTab] = useState(0);
    const [postData, setPostData] = useState(data[0]);
    const [isPast, setIsPast] = useState(0);

    const menuTab = ['2020', '2021', '2022', '2023'];
    const getMenu = () => {
        return (menuTab.map((item, idx) => {
            return (
                <div
                    key={idx}
                    className={`${idx === isPast ? styles.activeNavItem : styles.navItem}`}
                    onClick={() => clickMenu(idx)}>{item}</div>
            );
        }));
    };

    const clickMenu = (idx) => {
        setIsPast(idx);
        setCurrentTab(idx);
    };

    useEffect(() => {
        setPostData(data[0]);
    }, []);

    useEffect(() => {
        setPostData(data[currentTab]);
    }, [currentTab]);

    const getContents = () => {
        return (postData.tabContents.map((el, idx) => {
            return (
                <div key={idx} className={styles.contentsOuterBox}>
                    <div className={styles.yearBox}>
                        <p className={styles.year}>{el.year}</p>
                    </div>
                    <div className={styles.yearOuterBox}>
                        {getMonths(el.yContents)}
                    </div>
                </div>
            );
        }));
    }
    const getMonths = (el) => {
        return (el.map((item, idx) => {
            return (
                <div key={idx} className={styles.yearContentsBox}>
                    <div className={styles.monthBox}>
                        <p className={styles.month}>{item.month}</p>
                    </div>
                    <div className={styles.monthContentsBox}>
                        {getInnerContents(item.mContent)}
                    </div>
                </div>
            )
        }));
    };
    const getInnerContents = (c) => {
        return (c.map((content, idx) => {
            return (<p key={idx} className={styles.monthContents}>{content}</p>);
        }));
    };

    return (
        <section className={styles.historySection}>
            <div className={["containers", styles.historyContainer].join(' ')}>
                <div className={styles.historyTitleBox}>
                    <p className={styles.historyTitle}>
                        연혁
                    </p>
                </div>
                <div className={styles.navBox}>{getMenu()}</div>
                <div className={styles.outerBox}>
                    {getContents()}
                </div>
            </div>
        </section>
    );

}

export default History;