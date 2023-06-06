import React from "react";

import styles from '../../css/services/ServiceCard.module.css';

const Card = ({key, img, title, handler}) => {
    
    return (
        <div key={key} className={styles.serviceCard} onClick={handler}>
            <div className={styles.cardContents}>
                <div className={styles.cardImgBox}>
                    <img src={img[0]} alt="" className={styles.cardImg}/>
                </div>
                <div className={styles.cardTitleBox}>
                    <p className={styles.cardTitle}>{title}</p>
                </div>
            </div>
        </div>
    );

}

export default Card;