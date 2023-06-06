import React from "react";

import styles from '../../css/News/Card.module.css';

const NewsCard = ({img, title, date, handler}) => {

    return (
        <div className={styles.newsCard} onClick={handler}>
            <div className={styles.imgBox}>
                <img src={img} alt="cardImg" className={styles.cardImg} />
            </div>
            <div className={styles.contentBox}>
                <div className={styles.titleBox}>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.dateBox}>
                    <p className={styles.date}>{date}</p>
                </div>
            </div>
        </div>
    );

}

export default NewsCard;