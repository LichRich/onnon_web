import React from "react";

import styles from '../../css/Home/Intro.module.css';

const Intro = () => {

    return (

        <section className={styles.introSection}>
            <div className="backgrounds">
                {/* <div className={styles.introBgBox}>
                    <img src="" alt="intro bg" className={styles.introBgImg} />
                </div> */}
            </div>
            <div className={["contianers", styles.containerIntro].join(' ')}>
                <div className={styles.mainLogoBox}>
                    <img src={process.env.PUBLIC_URL + '/logo_words.png'} alt="main logo" className={styles.mainLogo} />
                </div>
                <div className={styles.mainTextBox}>
                    <p className={styles.mainText}>온앤온 협동조합에서 우리는 희망을 현실로,</p>
                    <p className={styles.mainText}>그리고 새로운 희망을 만들어갑니다.</p>
                    <p className={styles.mainText}>어제의 모습에서 배우고, 오늘에 몰두하며, 내일을 기대합니다.</p>
                </div>
            </div>
        </section>

    );

}

export default Intro;