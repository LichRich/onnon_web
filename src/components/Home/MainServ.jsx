import React from "react";

import styles from '../../css/Home/Service.module.css';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const Services = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        pauseOnHover: true,
        cssEase: "linear",
    };

    let navigate = useNavigate();
    const goService = () => {
        navigate("/services");
    }
    
    return (
        <section className="sections">
            {/* <div className="backgrounds"> */}
                {/* <div className="">
                    <img src="" alt="service bg" className="" />
                </div> */}
            {/* </div> */}
            <div className={["containers", styles.containerService].join(' ')}>
                <div className={styles.serviceTitleBox}>
                    <p className={styles.serviceTitle}>서비스 소개</p>
                </div>
                <div className={styles.serviceDescBox}>
                    <p className={styles.serviceDesc}>온앤온은 콘텐츠를 통해 익숙함과 새로움, 사람과 기술을 연결합니다.</p>
                    <p className={styles.serviceDesc}>창의적이지만 친숙한 콘텐츠를 통해, 누구에게나 쉽게 우리의 메시지를 전달합니다.</p>
                </div>
                <div className={styles.serviceCardBox}>
                    <Slider {...settings}>
                        <div className={styles.serviceCard}>
                            <div className={styles.cardContents}>
                                <div className={styles.cardImgBox}>
                                    <img src={process.env.PUBLIC_URL+'/services/video.jpg'} alt="" className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitleBox}>
                                    <p className={styles.cardTitle}>영상제작</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.cardContents}>
                                <div className={styles.cardImgBox}>
                                    <img src={process.env.PUBLIC_URL+'/services/design.png'} alt="" className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitleBox}>
                                    <p className={styles.cardTitle}>디자인</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.cardContents}>
                                <div className={styles.cardImgBox}>
                                    <img src={process.env.PUBLIC_URL+'/services/web.jpg'} alt="" className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitleBox}>
                                    <p className={styles.cardTitle}>웹사이트 제작</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.cardContents}>
                                <div className={styles.cardImgBox}>
                                    <img src={process.env.PUBLIC_URL+'/services/event.jpg'} alt="" className={styles.cardImg} />
                                </div>
                                <div className={styles.cardTitleBox}>
                                    <p className={styles.cardTitle}>행사 기획, 운영</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceCard}>
                            <div className={styles.cardContents}>
                                <div className={[styles.cardImgBox, styles.lastImgBox].join(" ")}>
                                    <img src={process.env.PUBLIC_URL+'/services/solution.png'} alt="" className={[styles.cardImg, styles.lastImg].join(" ")} />
                                </div>
                                <div className={styles.cardTitleBox}>
                                    <p className={styles.cardTitle}>지역문제해결</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className={styles.btnBox}>
                    <button className={styles.btn} onClick={() => goService()}>더보기 →</button>
                </div>
            </div>
        </section>
    );

}

export default Services;