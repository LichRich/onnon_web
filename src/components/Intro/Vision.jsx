import React from 'react'

import styles from '../../css/Intro/Vision.module.css';

export default function Vision() {
  return (
    <section className={["sections", styles.visionSection].join(" ")}>
        <div className={["containers", styles.visionContainer].join(" ")}>
            <div className={styles.visionTitleBox}>
                <p className={styles.visionTitle}>
                    VISION
                </p>
                <p className={styles.visionDesc}>
                    우리는 어떤 것들을 추구하고, 어떻게 나아갈 것입니다.
                </p>
            </div>
            <div className={styles.visionContentBox}>
                <img src={process.env.PUBLIC_URL + '/logo_box.png'} alt="vision img" className={styles.visionImg} />
            </div>
        </div>
    </section>
  )
}
