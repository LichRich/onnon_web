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
                <div className={[styles.visionContents, styles.leftBox].join(' ')}>
                    <div className={styles.visionImgBox}>
                        <img src={process.env.PUBLIC_URL + '/logo_box.png'} alt="vision img" className={styles.visionImg} />
                    </div>
                    <div className={styles.visionContentsDescBox}>
                        <p className={styles.visionContentsDesc}>
                            우리는 이러이러한 것들을 추구하며 나아갑니다.
                        </p>
                    </div>
                </div>
                <div className={[styles.visionContents, styles.rightBox].join(' ')}>
                    <div className={styles.visionContentsDescBox}>
                        <p className={styles.visionContentsDesc}>
                            우리는 지금도 어떤 것들을 바라보며 일을 하고 있고,
                        </p>
                    </div>
                    <div className={styles.visionImgBox}>
                        <img src={process.env.PUBLIC_URL + '/logo_box.png'} alt="vision img" className={styles.visionImg} />
                    </div>
                </div>
                <div className={[styles.visionContents, styles.leftBox].join(' ')}>
                    <div className={styles.visionImgBox}>
                        <img src={process.env.PUBLIC_URL + '/logo_box.png'} alt="vision img" className={styles.visionImg} />
                    </div>
                    <div className={styles.visionContentsDescBox}>
                        <p className={styles.visionContentsDesc}>
                            앞으로도 어떠한 방향성을 갖고 이렇게저렇게 나아갈 것입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
