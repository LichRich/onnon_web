import React, {useEffect, useState} from "react";

import styles from '../../css/Home/Customer.module.css';

const Customers = ({list}) => {

    const [desc, setDesc] = useState("");

    let descs = {};

    // useEffect(() => {
    //     list.map((c) => {
    //         descs = {
    //             ...list.desc
    //         }
    //     })
    // }, [])

    const getCustomers = () => {
        list.map((c, index) => {
            return (
                <div className={styles.customerCard} onmouseover={() => getDesc(index)}>
                    <div className={styles.cardContents}>
                        <div className={styles.cardImgBox}>
                            <img src={c.img} alt="" className={styles.cardImg}/>
                        </div>
                        <div className={styles.cardTitleBox}>
                            <p className={styles.cardTitle}>{c.name}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    const getDesc = (index) => {
        setDesc(descs[index]);
    }

    return (

        <section
            className={["sections", styles
                .customerSection]
                .join(' ')}>
            <div
                className={["containers", styles
                    .containerCustomer]
                    .join(' ')}>
                <div className={styles.customerTitleBox}>
                    <p className={styles.customerTitle}>주요 고객</p>
                </div>
                <div className={styles.customerCardBox}>
                    <div className={styles.customerCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>customer이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.customerCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>customer이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.customerCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>customer이름</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.customerCard}>
                        <div className={styles.cardContents}>
                            <div className={styles.cardImgBox}>
                                <img src="" alt="" className={styles.cardImg}/>
                            </div>
                            <div className={styles.cardTitleBox}>
                                <p className={styles.cardTitle}>customer이름</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.customerDescBox}>
                    <p className={styles.customerDesc}>
                        {/* {desc} */}
                        대상에게 제공되는 서비스 설명
                    </p>
                </div>
            </div>
        </section>

    );

}

export default Customers;