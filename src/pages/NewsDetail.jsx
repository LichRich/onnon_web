import React from "react";
import { useLocation } from "react-router-dom";

import styles from '../css/News/Detail.module.css';

const Detail = () => {

    let location = useLocation();
    const title = location.state.title;
    const content = location.state.content;
    const date = location.state.date;

    return (
        <section className="sections">
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
                    <div className={styles.contents} dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </div>
        </section>
    );

}

export default Detail;