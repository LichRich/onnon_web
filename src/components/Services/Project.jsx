import React from "react";
import Slider from "react-slick";

import styles from '../../css/services/Project.module.css';

const Project = ({open, close, imgs, title, contents, tags}) => {

    const carousel_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true
    };

    imgs = ['img', 'img', 'img', 'img'];

    const getImgs = () => {
        return (imgs.map((img, idx) => {
            return (
                <div key={idx} className={styles.carouselItem}>
                    <div className={styles.imgBox}>
                        {/* <img className={styles.img} src={img} alt="project img"/> */}
                        <div className={styles.img}>{img}</div>
                    </div>
                </div>
            );
        }));
    }

    return (
        <div
            className={open
                ? [styles.openModal, styles.modal].join(' ')
                : styles.modal}>
            {
                open
                    ? <section className={styles.modalSection}>
                            <div className={styles.modalContainer}>
                                <div className={styles.modalTitleBox}>
                                    <p className={styles.modalTitle}>{title}</p>
                                    <button className={styles.close} onClick={close}>
                                        &times;
                                    </button>
                                </div>
                                <div className={styles.modalOuterImgBox}>
                                    <Slider {...carousel_settings}>
                                        {getImgs()}
                                    </Slider>
                                </div>
                                <div className={styles.modalOuterContentBox}>
                                    <div className={styles.modalInnerContentBox}>
                                        <p className={styles.modalContent}>{contents}</p>
                                    </div>
                                    <div className={styles.modalTagBox}>
                                        <p className={styles.modalTag}>{tags}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    : null
            }
        </div>
    );

}

export default Project;