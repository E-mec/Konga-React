import slide1 from './slide1.jpg'
import slide2 from './slide2.webp'
import slide3 from './slide3.jpg'
import slide4 from './slide4.webp'
import slide5 from './slide5.jpg'
import slide6 from './slide6.jpg'
import slide7 from './slide7.jpg'
import slide8 from './slide8.webp'
import slide9 from './slide9.webp'
import s1 from './slide2-1.jpg'
import s2 from './slide2-2.webp'
import s3 from './slide2-3-1.webp'
import s4 from './slide2-4.jpg' 
import './Slide.css'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";











export default function Slider(){
    return(

        <>

        <section>
        <div className='slide-box'>

            {/* Slider box */}

            <div className='slider'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 6000, disableOnInteraction: false, }}  pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" >

        <SwiperSlide><img src={slide1} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide4} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide5} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide6} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide7} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide8} alt='slide1' className='s-img'/></SwiperSlide>
        <SwiperSlide><img src={slide9} alt='slide1' className='s-img'/></SwiperSlide>
        </Swiper>
            </div>

            {/* Swiper box links starts */}

            <div className='slide-links'>
                <div className='slinks'><img src={s1} alt='s1' className='s1'/></div>
                <div className='slinks'><img src={s2} alt='s1' className='s1'/></div>
                <div className='slinks'><img src={s3} alt='s1' className='s1'/></div>
                <div className='slinks'><img src={s4} alt='s1' className='s1'/></div>
            </div>
        </div>
        
        </section>
        
        </>
    )
}