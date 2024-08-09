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
                className={styles.introSection}>
                <div
                    className={["containers", styles
                        .serviceContainer]
                        .join(" ")}>
                    <div className={styles.titleBox}>
                        <p className={styles.title}>
                            서비스 소개
                        </p>
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