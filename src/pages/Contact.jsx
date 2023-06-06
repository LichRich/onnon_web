import React, { useEffect, useRef, useState } from "react";
import CheckBoxGroup from '../components/Contact/CheckBoxGroup';
import CheckBox from '../components/Contact/CheckBox';

import styles from '../css/Contact.module.css';

const Contact = () => {

    const mapElement = useRef(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const {naver} = window;
        if(!mapElement || !naver) return;

        const location = new naver.maps.LatLng(36.7698, 126.9331);
        
        const map = new naver.maps.Map(mapElement.current, {
            center: location,
            zoom: 17,
            zoomControl: false,
            draggable: false,
            pinchZoom: false,
            scrollWheel: false,
            disableDoubleClickZoom: true,
            disableDoubleTapZoom: true,
            disableTwoFingerTapZoom: true,
            keyboardShortcuts: false,
            scaleControl: false,
        });

        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);

    return (
        <main className="main">
            <div className={styles.titleBox}>
                <p className={styles.title}>Contact</p>
            </div>
            <section className={["sections", styles.contactSection].join(" ")}>
                <div className={["containers", styles.contactContainer].join(" ")}>
                    <div className={styles.leftBox}>
                        <div id={styles.map} ref={mapElement}></div>
                        <div className={styles.infoBox}>
                            <p className={styles.addr}>주소: 충남 아산시 신창면 순천향로 22, B518호 (순천향대학교 산학협력단)</p>
                            <p className={styles.email}>E-mail: onandoncoop@gmail.com</p>
                            <p className={styles.phone}>전화번호: 010-9176-1429</p>
                        </div>
                    </div>
                    <div className={styles.rightBox}>
                        <div className={styles.rightTitleBox}>
                            <p className={styles.rightTitle}>
                                온라인 문의
                            </p>
                        </div>
                        <div className={styles.categoryBox}>
                            <CheckBoxGroup label="서비스 분야" values={categories} onChange={setCategories}>
                                <CheckBox value="service1">service1</CheckBox>
                                <CheckBox value="service2">service2</CheckBox>
                                <CheckBox value="service3">service3</CheckBox>
                            </CheckBoxGroup>
                        </div>
                        <div className={styles.infoTableBox}>
                            <legend>문의자 정보</legend>
                            <table className={styles.infoTable}>
                                <tbody>
                                    <tr>
                                        <td className={styles.infoTitle}>이름</td>
                                        <td>
                                            <input type="text" name="name" id="name" className={styles.value} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>소속 기업</td>
                                        <td>
                                            <input type="text" name="company" id="company" className={styles.value} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>연락처</td>
                                        <td>
                                            <input type="text" name="phone" id="phone" className={styles.value} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>이메일</td>
                                        <td>
                                            <input type="text" name="email" id="email" className={styles.value} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.askBox}>
                            <legend>문의사항</legend>
                            <textarea name="ask" id="ask" required="required"></textarea>
                        </div>
                        <div className={styles.btnBox}>
                            <button type="submit" id="submit" className={styles.submit}>제출</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );

}

export default Contact;