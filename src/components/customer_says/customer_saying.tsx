'use client'

import React, { useState } from 'react'
import style from './customer_saying.module.scss'
import { FaStar, FaStarHalfAlt, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Customer_saying = () => {
    const [_, setInit] = useState(false);

    const [reviewCart , setReviewCart] = useState([
        {
            id: 1,
            text: "Mash ALLAH Dono Hi Perfume Meri Soch Sa Be Zyda Achy Hai I Like It Thank You Elyscents",
            name: "Masood Akmal",
            product: "Dark Raven Inspired By Black Opium",
             link: "#",
            stars: 4,
        },
        {
            id: 2,
            text: "Excellent quality perfumes. Long lasting and premium feel. Highly recommended for everyone!",
            name: "Ali Khan",
            product: "Royal Oud Collection",
             link: "#",
            stars: 3
        },
        {
            id: 3,
            text: "Very fresh and unique scent. I love your perfumes, ordered three times already!",
            name: "Mohammad Irfan",
            product: "Summer Breeze Edition",
            link: "#",
            stars: 5,
        }
    ])
    return (
        <>
         <div className={style.cus_says_parnt}>
            <div className={style.mn_txt}>
                <h2>CUSTOMERS ARE SAYING</h2>
                <div className={style.rating_main}>
                    <div className={style.ratings}>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
                    </div>
                    <p>4.73 ★ (493)</p>
                </div>
            </div>

            <div className={style.swiper_container_wrapper}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}        
                    spaceBetween={100}      
                    centeredSlides={true}    
                    loop={true}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    navigation={{
                        prevEl: `.${style.swiper_button_prev}`,
                        nextEl: `.${style.swiper_button_next}`,
                    }}
                    onInit={() => setInit(true)}
                    className={style.mySwiper}>
                    {reviewCart.map((item) => (
                        <SwiperSlide key={item.id} className={style.custom_slide}>
                            <div className={style.reviwes}>
                                <div className={style.faq_right}>
                                    <FaQuoteRight size={35} color="#0B8F7A" />
                                </div>

                                <div className={style.review_text}>
                                    <p>{item.text}</p>
                                </div>

                                <div className={style.bottom_part}>
                                    <div className={style.cus_names}>
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <div className={style.customer_name}>
                                        <p>{item.name}</p>
                                        <a href="#" className={style.product_link}>{item.product}</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={style.navigation_wrapper}>
                    <div className={style.swiper_button_prev}>
                        <FaChevronLeft />
                    </div>
                    <div className={style.swiper_button_next}>
                        <FaChevronRight />
                    </div>
                </div>
            </div>
        </div>

        </>
       
    )
}

export default Customer_saying;