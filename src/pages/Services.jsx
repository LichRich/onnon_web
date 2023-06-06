import React, {useEffect, useState} from "react";

import {collection, getDocs, orderBy, query, getCountFromServer} from 'firebase/firestore';

import styles from '../css/services/Services.module.css';
import List from "../components/Services/List";
import Project from "../components/Services/Project";

const Services = ({db}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(
        {img: [''], title: 'title', content: "", tags: ['']}
    );

    const [docSnapshots, setDocSnapshots] = useState();
    const [list, setList] = useState([]);

    const projectRef = collection(db, 'projects');

    const openModal = (data) => {
        setModalData(data);
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const projects = query(projectRef, orderBy("contentIdx", "asc"));
            setDocSnapshots(await getDocs(projects));
        }
        fetchData();
    }, []);

    useEffect(() => {
        const setItemList = () => {
            if(docSnapshots !== undefined) {
                setList(docSnapshots.docs.map((doc) => ({
                    key: doc.id,
                    ...doc.data()
                })));
            }
        }
        setItemList();
    }, [docSnapshots]);

    return (
        <main className="main">
            <section
                className={["sections", styles
                    .serviceSection]
                    .join(' ')}>
                <div className="backgrounds">
                    <div className={styles.introBgBox}>
                        <img src="" alt="intro bg" className={styles.introBg}/>
                    </div>
                </div>
                <div
                    className={["containers", styles
                        .serviceContainer]
                        .join(" ")}>
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

            <List data={list} handler={openModal}/>

            <Project
                open={modalOpen}
                imgs={modalData.img}
                title={modalData.title}
                contents={modalData.content}
                tags={modalData.tags}
                close={() => closeModal()}/>

        </main>
    );

}

export default Services;