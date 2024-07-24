import f1 from './f1.webp';
import f2 from './f2.jpg';
import f3 from './f3.webp';
import f4 from './f4.webp';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

import './F-Mobile.css'

export default function FourMobile(){
    return(
        <>

            
        <Swiper scrollbar={{hide: true,}} slidesPerView={2}  modules={[Scrollbar]} className="mySwiper">
<ul className='f-main-mobile'>
        
        <li className='four-mobile'><SwiperSlide>
                        <div className='f-img-mobile'>
                            <img src={f1} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>HOME FURNISHINGS</h2>
                            <p>Get Up To 70% Off</p>
                            <p className='p'>SHOP NOW</p>
                        </section>
                        </SwiperSlide>
                        </li>


                        <li className='four'>
        <SwiperSlide>
                        <div className='f-img'>
                            <img src={f2} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>FITNESS TOOLS & EQUIPMENT</h2>
                            <p className='o'>Get Fitness Equipment At Amazing Discounts!</p>
                            <p className='p pp'>SHOP NOW</p>
                        </section>
                    </SwiperSlide>
                    </li>


                    <li className='four'>
        <SwiperSlide>
                        <div className='f-img'>
                            <img src={f3} alt='Four' />
                        </div>
                        <section className='txt'>
                            <h2>FITNESS TOOLS & EQUIPMENT</h2>
                            <p className='o'>Get Fitness Equipment At Amazing Discounts!</p>
                            <p className='p pp'>SHOP NOW</p>
                        </section>
                    </SwiperSlide>
                    </li>


                    <li className='four'>
        <SwiperSlide>                    
                        <div className='f-img'>
                            <img src={f4} alt='Four'/>
                        </div>
                        <section className='txt'>
                            <h2>TOP DEALS ON TELEVISIONS</h2>
                            <p>Get the TV You Want With Bargain Deals!</p>
                            <p className='p'>SHOP NOW</p>
                        </section>
                    </SwiperSlide>
                    </li>
                    </ul>

        </Swiper>
        
        </>
    )
}