import React from "react";
import { Icon } from 'semantic-ui-react';

import styles from '../css/Footer.module.css';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={["row", styles.footerRow].join(' ')} id="footer-contents">
                    <div className="footer-copy">
                        <p className={[styles.footerText, styles.copyright].join(' ')}>&copy; &nbsp;ON&ON, All Rights Reserved</p>
                    </div>
                    <div className={styles.footerInfo}>
                        <p className={[styles.footerText, styles.information].join(' ')}>주소: 충남 아산시 신창면 순천향로 22, B518호 (순천향대학교 산학협력단)</p>
                        <p className={[styles.footerText, styles.information].join(' ')}>TEL: 010-9176-1429</p>
                    </div>
                    <div className={styles.footerSns}>
                        <a href="https://www.instagram.com/onandon.___.coop/" target="_blank">
                            <Icon name="instagram"></Icon>
                        </a>
                        <a href="https://blog.naver.com/onandoncoop" target="_blank">
                        <Icon name="globe"></Icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;