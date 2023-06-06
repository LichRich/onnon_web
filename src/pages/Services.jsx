import React from "react";

import styles from '../css/services/Services.module.css';
import List from "../components/Services/List";

const Services = () => {

    return(
        <main className="main">
            <section className="sections">
                <div className="backgrounds">
                    <div className={styles.introBgBox}>
                        <img src="" alt="intro bg" className={styles.introBg}/>
                    </div>
                </div>
                <div className={["containers", styles.serviceContainer].join(" ")}>
                    <div className={styles.titleBox}>
                        <p className={styles.title}>
                            온앤온 협동조합
                        </p>
                    </div>
                    <div className={styles.visionBox}>
                        <p className={styles.vision}>온앤온은 콘텐츠를 통해 익숙함과 새로움, 사람과 기술을 연결합니다.</p>
                        <p className={styles.vision}>창의적이지만 친숙한 콘텐츠를 통해, 누구에게나 쉽게 우리의 메시지를 전달합니다.</p>
                    </div>
                </div>
            </section>

            <List />
        </main>
    );

}

export default Services;