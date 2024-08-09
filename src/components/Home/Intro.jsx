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
                {/* <div className={styles.mainLogoBox}>
                    <img src={process.env.PUBLIC_URL + '/logo_words.png'} alt="main logo" className={styles.mainLogo} />
                </div> */}
                <div className={styles.mainTextBox}>
                    <p className={styles.mainText}>메인카피 첫번째 줄. 길이 얼마나 될지</p>
                    <p className={styles.mainText}>메인카피 두번째 줄. 예상이 안되니</p>
                    <p className={styles.mainText}>메인카피 세번째 줄. 일단 세 줄로 작성</p>
                </div>
            </div>
        </section>

    );

}

export default Intro;