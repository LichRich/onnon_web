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
            desc: '대학 내 다양한 행사를 기획하고, 생동감있게 기록합니다.'
        }, {
            name: '교육기관',
            img: process.env.PUBLIC_URL + '/customers/edu.jpg',
            desc0: '학생의 눈높이에서 메시지를 전달하고,',
            desc1: '스스로 경험하고 느낄 수 있는 교육을 지향합니다.'
        }
    ]

    const getCustomers = () => {
        return (list.map((c, index) => {
            return (
                <div key={index} className={styles.customerCard} onMouseOver={() => getDesc(index)}>
                    <div className={styles.cardImgBox}>
                        <img src={c.img} alt="" className={styles.cardImg}/>
                    </div>
                    <div className={styles.cardContents}>
                        <div className={styles.cardTitleBox}>
                            <p className={styles.cardTitle}>{c.name}</p>
                        </div>
                        <div className={styles.cardDescBox}>
                            {index==3 ? <><p className={styles.cardDesc}>{c.desc0}</p>
                                        <p className={styles.cardDesc}>{c.desc1}</p></> : <p className={styles.cardDesc}>{c.desc}</p>}
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
                className={styles.containerCustomer}>
                <div className={styles.customerTitleBox}>
                    <p className={styles.customerTitle}>주요 고객</p>
                </div>
                <div className={styles.customerCardBox}>
                    {getCustomers()}
                </div>
                {/* <div className={styles.customerDescBox}>
                    <p className={styles.customerDesc}>
                        {desc}
                    </p>
                </div> */}
            </div>
        </section>

    );

}

export default Customers;