import React from 'react'

import styles from '../../css/Intro/Contact.module.css';
import {Link, useNavigate} from 'react-router-dom';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
        <div className={["containers", styles.contactContainer].join(" ")}>
            <div className={styles.contactBgBox}>
                <img src={process.env.PUBLIC_URL + '/intro/contact.jpg'} alt="contact img" className={styles.contactImg} />
            </div>
            <div className={styles.contactTitleBox}>
                <p className={styles.contactTitle}>
                    CONTACT
                </p>
                <p className={styles.contactDesc}>
                    문의사항이 있으신 경우, 이메일 혹은 아래 링크를 통해 문의 바랍니다.
                </p>
            </div>
            <div className={styles.btnBox}>
                <Link to="/contact" className={styles.contactBtn}>
                    문의하기
                </Link>
            </div>
        </div>
    </section>
  )
}
