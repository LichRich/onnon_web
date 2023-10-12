import React from "react";
import { Icon } from 'semantic-ui-react';

import styles from '../css/Footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContents}>
                <div className={styles.footerLeft}>
                    <div className={styles.footerInfo}>
                        <p className={styles.information}>주소: 충남 아산시 신창면 순천향로 22, B518호 (순천향대학교 산학협력단)</p>
                        <p className={styles.information}>TEL: 010-9176-1429</p>
                    </div>
                    <div className={styles.footerCopy}>
                        <p className={styles.copyright}>&copy; &nbsp;ON&ON, All Rights Reserved</p>
                    </div>
                </div>
                <div className={styles.footerSns}>
                    <a href="https://www.instagram.com/onandon.___.coop/" target="_blank">
                        <Icon name="instagram"></Icon>
                        <p>인스타그램</p>
                    </a>
                    <a href="https://blog.naver.com/onandoncoop" target="_blank">
                        <Icon name="globe"></Icon>
                        <p>블로그</p>
                    </a>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;