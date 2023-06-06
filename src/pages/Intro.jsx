import React from "react";
import History from "../components/Intro/History";

import styles from '../css/Intro/Intro.module.css';
import Crew from "../components/Intro/Crew";

const Intro = () => {

    return (
        <main className="main">
            <section className={["sections", styles.introSection].join(' ')}>
                <div className={["backgrounds", styles.introBackground].join(' ')}>
                    <div className={styles.introBgBox}>
                        <img src="" alt="intro bg" className={styles.introBg}/>
                    </div>
                </div>
                <div className={["containers", styles.introContainer].join(' ')}>
                    <div className={styles.introTitleBox}>
                        <p className={styles.introTitle}>
                            온앤온 협동조합
                        </p>
                    </div>
                    <div className={styles.introDescBox}>
                        <p className={styles.introDesc}>우리는 희망을 현실로, 그리고 새로운 희망을 만들어갑니다.</p>
                        <p className={styles.introDesc}>어제의 모습에서 배우고, 오늘에 몰두하며, 내일을 기대하는 온앤온 협동조합입니다.</p>
                    </div>
                </div>
            </section>

            <Crew />
            
            {/* <History /> */}
        </main>
    );

}

export default Intro;