import React from "react";
import { useNavigate } from "react-router-dom";

import styles from '../../css/Home/Contact.module.css';

const MainContact = () => {

    let navigate = useNavigate();
    const goContact = () => {
        navigate("/contact");
    }

    return(
        <section className={["sections", styles.contactSection].join(' ')}>
            <div className={["backgrounds", styles.contactBg].join(' ')}>
                {/* <div className="">
                    <img src="" alt="contact bg" className="" />
                </div> */}
            </div>
            <div className={["containers", styles.contactContainer].join(' ')}>
                <div className={styles.contactTitleBox}>
                    <p className={styles.contactTitle}>온라인 문의</p>
                </div>
                <div className={styles.contactDescBox}>
                    <p className={styles.contactDesc}>문의사항이 있으시다면, 아래 링크를 클릭해주세요.</p>
                    <p className={styles.contactDesc}>빠른 시일 내에 답변 드리도록 하겠습니다.</p>
                </div>
                <div className={styles.contactBtnBox}>
                    <button className={styles.contactBtn} onClick={() => goContact()}>문의하기</button>
                </div>
            </div>
        </section>
    );

}

export default MainContact;