import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/occasion.module.scss"

export default function occasion() {
    return (
        <>
            <div className={`${styles.mainContainer}`} id="occassion">
                <div className="row">
                    <div className={`${styles.leftContainer} col-md-8`}>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.contentHeading}`}>PRIVATE DINING & WEDDINGS</div>
                            <div className={`${styles.contentParagraph}`}>Customized to fit the specific desires of each party, our private dining and options range from a 90-person seating in our Bellecour Room to a full restaurant takeover for up to 150 guests.</div>
                            <button className={`${styles.learnBtn}`}>LEARN MORE</button>
                        </div>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.contentHeading}`}>SMALL PARTIES & COCKTAILS</div>
                            <div className={`${styles.contentParagraph}`}>Small parties are also welcome in the Bar & Lounge at DANIEL, for festive cocktail celebrations or an intimate seated dinner for up to 27 guests.</div>
                            <button className={`${styles.learnBtn}`}>LEARN MORE</button>
                        </div>
                    </div>

                    <div className={`numberCardArrowDark col-md-4 d-flex justify-content-end align-items-center`}>
                        <div className={`numCardArrowDark `}>
                            <div className={`numberCardDark fw-bold `}>
                                <div className={`bigNumberDark`}>
                                    0
                                    4
                                </div>
                                <div className={`sectionTitleDark`}>
                                    OCCASIONS
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
