'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './best_seller.module.scss'

const Best_seller = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const products = [

        {
            name: 'ROYAL OUD',
            orignal_price: 2100.00,
            dicounted_price: 1799.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540',
        },

        {
            name: 'SALSA SPIRIT - INPIRED BY CREED',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Salsa_Spirit_40a4eff5-1c16-4bf3-97ad-bcec31a39ded.jpg?v=1760523136&width=1800',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Salsa-Spirit.jpg?v=1760523136&width=540'
        },

        {
            name: 'ZARAK INSPIRED BY AZZARO WANTED',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/zarak.jpg?v=1760522773&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Zarak.jpg?v=1760522773&width=540'
        },
        {
            name: 'EXOTIC PULSE',
            orignal_price: 2000.00,
            dicounted_price: 1799.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Exotic_Pulse_ca40f1a2-26bb-4ae9-bab5-29e6182ef259.jpg?v=1760523043&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Exotic-Pulse.jpg?v=1760523043&width=720',
        },
        {
            name: 'WILD ESSENCE - INSPIRED BY DIOR',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/wild_Essence_121a55f5-0fa0-4e3f-9284-ff361b4feda5.jpg?v=1760523219&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Wild-Esscense.jpg?v=1760523219&width=720'

        },

        {
            name: 'PEAK BREEZE - INSPIRED BY SILVER',
            orignal_price: 2000.00,
            dicounted_price: 1699.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Peak_Breeze_ebff756b-2f75-4d81-bb82-fb443abad2ea.jpg?v=1760523055&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/ELyscents-Peak-Breeze.jpg?v=1760523055&width=720'
        },
        {
            name: 'APEX INSPIRED BY DUNHILL',
            orignal_price: 2000.00,
            dicounted_price: 1599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/APEX_d166e803-4b99-4f5b-a2e3-1dc62e38ba21.jpg?v=1760523306&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Apex.jpg?v=1760523306&width=360'
        },
        {
            name: 'GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE',
            orignal_price: 2000.00,
            dicounted_price: 1799.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Green_Elixer.jpg?v=1760523069&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Green-Elixir.jpg?v=1760523069&width=360'
        },


    ]

    const CartItem = (value: any, index: number) => (
        <div className={style.carts_prnt}>
            <div className={style.cart_image}>
                <img
                    src={
                        !isMobile && hoverIndex === index
                            ? value.img_src2
                            : value.img_src1
                    }
                    onMouseEnter={() => !isMobile && setHoverIndex(index)}
                    onMouseLeave={() => !isMobile && setHoverIndex(null)}
                    alt={value.name} />
                <div className={style.sale_tag}>
                    <p>Sale</p>
                </div>
            </div>

            <div className={style.pricing_sec}>
                <h3>{value.name}</h3>

                <div className={style.rs_sec}>
                    <span className={style.orignal_price}>
                        Rs.{value.orignal_price}
                    </span>
                    <span className={style.aftrsale_price}>
                        Rs.{value.dicounted_price}
                    </span>
                </div>

                <span className={style.saving_price}>
                    Save Rs.{value.orignal_price - value.dicounted_price}
                </span>
            </div>

            <div className={style.addtocart_btn}>
                <button className={style.cart_btn}>Add to Cart</button>
            </div>
        </div>
    )

    
    return (
        <>
            <div className={style.deals_sec}>
                <h2 className={style.heading_txt}>BEST SELLERS PERFUMES</h2>
            </div>

            <div className={style.cart_sec_main}>
                {!isMobile ? (
                    <div className={style.crazydeal_parnt}>
                        {products.map((value, index) =>
                            CartItem(value, index)
                        )}
                    </div>
                ) : (
                    <Swiper slidesPerView={1.2} spaceBetween={15}>
                        {products.map((value, index) => (
                            <SwiperSlide key={index}>
                                {CartItem(value, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                <div className={style.view_btn}>
                    <button>VIEW ALL</button>
                </div>
            </div>
        </>
    )
}

export default Best_seller
