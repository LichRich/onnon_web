import React, {useEffect, useState} from "react";

import styles from '../../css/Home/Customer.module.css';

const Customers = ({list}) => {

    const [desc, setDesc] = useState("");

    let descs = {};

    list = [
        {
            name: '관공서',
            img: process.env.PUBLIC_URL + '/customers/public.jpg',
            desc: '누구나 즐기고 공감할 수 있는 축제/행사를 기획하고 운영합니다.'
        }, {
            name: '기업',
            img: process.env.PUBLIC_URL + '/customers/company.jpg',
            desc: '기업의 경쟁력을 최적의 콘텐츠를 통해 시장에 전달합니다.'
        }, {
            name: '대학',
            img: process.env.PUBLIC_URL + '/customers/university.jpg',
            desc: '대학 contents'
        }, {
            name: '교육기관',
            img: process.env.PUBLIC_URL + '/customers/edu.jpg',
            desc: '교육기관 contents'
        }
    ]

    // useEffect(() => {
    //     list.map((c) => {
    //         descs = {
    //             ...list.desc
    //         }
    //     })
    // }, [])

    const getCustomers = () => {
        return (list.map((c, index) => {
            return (
                <div className={styles.customerCard} onMouseOver={() => getDesc(index)}>
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
        }));
    }

    const getDesc = (index) => {
        setDesc(list[index].desc);
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
                    {getCustomers()}
                    {/* <div className={styles.customerCard}>
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
                    </div> */
                    }
                </div>
                <div className={styles.customerDescBox}>
                    <p className={styles.customerDesc}>
                        {desc}
                        {/* 대상에게 제공되는 서비스 설명 */}
                    </p>
                </div>
            </div>
        </section>

    );

}

export default Customers;