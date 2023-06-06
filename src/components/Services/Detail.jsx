import React from "react";

const Detail = ({ open, imgs, title, contents, tags }) => {

    return (
        <div
            className={open
                ? 'openModal modal'
                : 'modal'}>
            {
                open
                    ? <section className="modalContainer">
                            <div className="modalImgSection">
                                <div className="modalImgBox">
                                    <img src="" className="modalImg" alt="온앤온 포트폴리오"/>
                                </div>
                            </div>
                            <div className="modalContentSection">
                                <div className="modalTitleBox">
                                    <p className="modalTitle">타이틀</p>
                                </div>
                                <div className="modalContentBox">
                                    <div className="modalContentInner">
                                        <p>내용</p>
                                    </div>
                                    <div className="modalTagBox">
                                        <p className="modalTags">#태그</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    : null
            }
        </div>
    );

}

export default Detail;