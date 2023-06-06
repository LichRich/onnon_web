import React from "react";

import styles from '../../css/Home/Service.module.css';

const Services = () => {
    
    return (
        <section className="sections">
            <div className="backgrounds">
                <div className="">
                    <img src="" alt="service bg" className="" />
                </div>
            </div>
            <div className={["containers", styles.containerService].join(' ')}>
                <div className={styles.serviceTitleBox}>
                    <p className={styles.serviceTitle}>서비스 소개</p>
                </div>
                <div className={styles.serviceDescBox}>
                    <p className={styles.serviceDesc}>온앤온은 콘텐츠를 통해 익숙함과 새로움, 사람과 기술을 연결합니다.</p>
                    <p className={styles.serviceDesc}>창의적이지만 친숙한 콘텐츠를 통해, 누구에게나 쉽게 우리의 메시지를 전달합니다.</p>
                </div>
                <div className={styles.serviceCardBox}>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg} />
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>service이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg} />
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>service이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg} />
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>service이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg} />
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>service이름</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Services;