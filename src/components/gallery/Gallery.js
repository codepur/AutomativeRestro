import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconArrowLeft, IconArrowRight, IconArrowRightBar } from '@tabler/icons';
import { Image } from 'react-bootstrap';
import styles from "../../styles/about.module.scss"


export default function Gallery() {
    const [slides] = useState([{ image: 'images/gallery1.jpg' }, { image: 'images/gallery2.jpg' }, { image: 'images/gallery3.jpg' }, { image: 'images/gallery4.jpg' }, { image: 'images/gallery5.jpg' }, { image: 'images/gallery6.jpg' }, { image: 'images/gallery7.jpg' }])
    const [slideNumber, setSlideNumber] = useState(0)
    const settings =
    {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        // autoplay: true,
        // beforeChange: (current) => setSlideNumber(current),
        afterChange: current => setSlideNumber(current)
    };
    let slider
    const next = () => {
        slider.slickNext()
    }
    const prev = () => {
        slider.slickPrev()
    }
    return (
        <section className={`bgGrey`} id="gallery">
            <div className='container-fluid m-0'>
                <div className="row">
                    <div className={`col-md-8 m-0 p-0`} >
                        <Slider className={``} ref={sli => (slider = sli)} {...settings}>
                            {
                                slides.map((slide, index) =>
                                (
                                    <div key={index} className={`d-flex justify-content-center align-item-center`}>
                                        <Image src={slide.image} alt="slide" className={`img img-fluid w-100    `} />
                                    </div>

                                ))
                            }
                        </Slider>
                    </div>
                    <div className='col-md-4 d-flex flex-column justify-content-center align-items-end p-0'>
                        <div className={`numCardArrowRight `}>
                            <div className={`numberCard numberCardRight fw-bold`}>
                                <div className={`bigNumber`}>
                                    0
                                    6
                                </div>
                                <div className={`sectionTitle`}>
                                    Gallery
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.slickSection} d-flex justify-content-center mt-3`}>
                            <button type="button" className='slickButton mx-3' onClick={prev}><IconArrowLeft /></button>
                            <span className='slickNumber text-center'><span></span>{slideNumber + 1}<span>/</span>{slides.length}</span>
                            <button type="button" className='slickButton mx-3' onClick={next}><IconArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
