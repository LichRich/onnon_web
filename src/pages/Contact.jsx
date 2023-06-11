import React, { useEffect, useRef, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import CheckBoxGroup from '../components/Contact/CheckBoxGroup';
import CheckBox from '../components/Contact/CheckBox';

import styles from '../css/Contact.module.css';

const Contact = ({db}) => {

    const mapElement = useRef(null);
    const [categories, setCategories] = useState([]);

    // const [post]

    const dir = 'contact';

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

    const uploadDoc = async (e) => {
        e.preventDefault();

        try {
            // const docRef = await setDoc(doc(db, dir, postId), {
            //     id: postId,
            //     category: 
            // })
        } catch (err) {
            console.error("error adding doc: ", err);
        }
    }

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
                    <form className={styles.rightBox}>
                        <div className={styles.rightTitleBox}>
                            <p className={styles.rightTitle}>
                                온라인 문의
                            </p>
                        </div>
                        <div className={styles.categoryBox}>
                            <CheckBoxGroup label="서비스 분야" values={categories} onChange={setCategories}>
                                <CheckBox value="video">영상</CheckBox>
                                <CheckBox value="design">디자인</CheckBox>
                                <CheckBox value="web">웹사이트</CheckBox>
                                <CheckBox value="event">행사</CheckBox>
                                <CheckBox value="solution">지역문제</CheckBox>
                            </CheckBoxGroup>
                        </div>
                        <div className={styles.infoTableBox}>
                            <legend>문의자 정보</legend>
                            <table className={styles.infoTable}>
                                <tbody>
                                    <tr>
                                        <td className={styles.infoTitle}>이름</td>
                                        <td>
                                            <input type="text" name="name" id="name" className={styles.value} placeholder="이름" required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>소속 기업</td>
                                        <td>
                                            <input type="text" name="company" id="company" placeholder="기업명" className={styles.value} required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>연락처</td>
                                        <td>
                                            <input type="text" name="phone" id="phone" placeholder="연락처" className={styles.value} required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.infoTitle}>이메일</td>
                                        <td>
                                            <input type="email" name="email" id="email" placeholder="이메일" className={styles.value} required/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.askBox}>
                            <legend>문의사항</legend>
                            <textarea name="ask" id="ask" required></textarea>
                        </div>
                        <div className={styles.btnBox}>
                            <button type="submit" id="submit" className={styles.submit}>제출</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );

}

export default Contact;