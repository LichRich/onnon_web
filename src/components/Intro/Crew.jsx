import React from "react";

import styles from '../../css/Intro/Crew.module.css';

const Crew = () => {

    return (
        <section className={["sections", styles.crewSection].join(" ")}>
            <div className={["containers", styles.crewContainer].join(" ")}>
                <div className={styles.crewTitleBox}>
                    <p className={styles.crewTitle}>
                        팀 소개
                    </p>
                </div>
                <div className={styles.crewCardBox}>
                    <div className={styles.crewCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardNameBox}>
                                <p className={styles.cardName}>박진규</p>
                            </div>
                            <div className={styles.cardDescBox}>
                                <p className={styles.cardRole}>대표</p>
                                <p className={styles.cardDesc}>한 마디</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.crewCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardNameBox}>
                                <p className={styles.cardName}>김법성</p>
                            </div>
                            <div className={styles.cardDescBox}>
                                <p className={styles.cardRole}>이사</p>
                                <p className={styles.cardDesc}>한 마디</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.crewCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardNameBox}>
                                <p className={styles.cardName}>이찬호</p>
                            </div>
                            <div className={styles.cardDescBox}>
                                <p className={styles.cardRole}>개발</p>
                                <p className={styles.cardDesc}>한 마디</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.crewCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardNameBox}>
                                <p className={styles.cardName}>가요한</p>
                            </div>
                            <div className={styles.cardDescBox}>
                                <p className={styles.cardRole}>기획</p>
                                <p className={styles.cardDesc}>한 마디</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Crew;