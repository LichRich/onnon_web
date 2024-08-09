import React from "react";
import History from "../components/Intro/History";

import styles from '../css/Intro/Intro.module.css';
import Crew from "../components/Intro/Crew";
import Vision from "../components/Intro/Vision";
import Contact from "../components/Intro/Contact";

const Intro = () => {

    return (
        <main className="main">
            <section className={["sections", styles.introSection].join(' ')}>
                <div className={["contianers", styles.containerIntro].join(' ')}>
                    <div className={styles.introLogoBox}>
                        <img src={process.env.PUBLIC_URL + '/logo_box.png'} alt="main logo" className={styles.introLogo} />
                    </div>
                    <div className={styles.introTextBox}>
                        <p className={styles.introText}>뭔가뭔가 어떻게어떻게 하는 기업</p>
                        <p className={[styles.introText, styles.introName].join([' '])}>온앤온 협동조합입니다.</p>
                    </div>
                </div>
            </section>

            <Vision />

            <Contact />

            {/* <Crew /> */}
            
            {/* <History /> */}
        </main>
    );

}

export default Intro;