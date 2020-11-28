import React, {useState, useContext, useEffect} from "react";
import {MagazineContext} from '../dataContext';
// import slider
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
// import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

SwiperCore.use(Pagination);

const Magazine = () => {
    const [magazines, setMagazines] = useContext(MagazineContext);
    const [Mobile, setMobile] = useState(false);
    const slides = [];

    let isMobile = window.matchMedia("only screen and (max-width: 1024px)").matches;

    useEffect(()=> {
        if (isMobile) {
            setMobile(true)
        }
    },[]);

    for (let i = 0; i < magazines.length; i++) {
        slides.push (
            <SwiperSlide key={`slide-${i}`} className="magazine">
                <div className="wrap-magazine">
                    <img src={magazines[i].image} alt={magazines[i].title}/>
                    <div className="text">
                        <h3> {magazines[i].title} </h3>
                        <div className="parag">
                            <h4> {magazines[i].description} </h4>
                        </div>
                        <p> {magazines[i].date} </p>
                    </div>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <>
        
        {!Mobile && (
            <React.Fragment>
                <Swiper spaceBetween={30} slidesPerView={4} id='main' className='magazines' pagination>
                    <h3 className='magazine-title' ><FontAwesomeIcon icon={faCircle}/> Magazine<span>Mostra Tutti</span></h3>
                    {slides}
                </Swiper>
            </React.Fragment>
        )}

        {Mobile && (
            <React.Fragment>
                <Swiper spaceBetween={10} slidesPerView={2} id='main' className='magazines' pagination>
                    <h3 className='magazine-title' ><FontAwesomeIcon icon={faCircle}/> Magazine<span>Mostra Tutti</span></h3>
                    {slides}
                </Swiper>
            </React.Fragment>
        )}
        
        </>
    );
};

export default Magazine;