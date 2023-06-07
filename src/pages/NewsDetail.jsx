import React from "react";
import { useLocation } from "react-router-dom";

import styles from '../css/News/Detail.module.css';

const Detail = () => {

    let location = useLocation();
    const title = location.state.title;
    const content = location.state.content;
    const date = location.state.date;
    const img = location.state.img;
    const link = location.state.link;

    return (
        <section className={styles.detailSection}>
            <div className="containers">
                <div className={styles.titleBox}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <p className={styles.date}>
                        {date}
                    </p>
                </div>
                <div className={styles.contentsBox}>
                    <div className={styles.imgBox}>
                        {
                            img.map((item, idx) => {
                                return <img key={idx} src={item} alt="news img" className={styles.img} />
                            })
                        }
                    </div>
                    <div className={styles.contents} dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
                <div className={styles.linkBox}>
                    <p className={styles.link}>출처: {link}</p>
                </div>
            </div>
        </section>
    );

}

export default Detail;