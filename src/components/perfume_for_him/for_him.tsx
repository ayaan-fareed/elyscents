'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './for_him.module.scss'
import Link from 'next/link'

type IForHimType = {
    name: string,
    orignal_price: number,
    dicounted_price: number,
    img_src1: string,
    img_src2: string
}

const For_him = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [ForHim, setForHim] = useState<IForHimType[]>([])

    const data = [
        {
            name: 'DREAM INPIRED BY JANNAN',
            orignal_price: 2000,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Dreame.jpg?v=1760523421&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream.jpg?v=1760523421&width=360'
        },

        {
            name: 'FORMAL INPIRED BY OFFICE FOR MEN',
            orignal_price: 2000.00,
            dicounted_price: 1599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Formel.jpg?v=1760522782&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Formal.jpg?v=1760522782&width=360',
        },

        {
            name: 'FIERY TOBACCO - INSPIRED BY MANCERA',
            orignal_price: 2000.00,
            dicounted_price: 1699.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/fiery_tobacco.jpg?v=1760523091&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Fiery-Tobaco.jpg?v=1760523091&width=360'
        },
        {
            name: 'DARK RAVEN INPIRED BY BLACK OPIUM',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/dark_reven.jpg?v=1760522570&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dark-Raven.jpg?v=1760522570&width=360'
        },
        {
            name: 'ROYAL OUD',
            orignal_price: 2000.00,
            dicounted_price: 1799.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540'
        },

        {
            name: 'SALSA SPIRIT - INSPIRED BY CREED AVENTUS',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Salsa_Spirit_40a4eff5-1c16-4bf3-97ad-bcec31a39ded.jpg?v=1760523136&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Salsa-Spirit.jpg?v=1760523136&width=720'
        },
        {
            name: 'ZARAK INSPIRED BY AZZARO WANTED',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/zarak.jpg?v=1760522773&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Zarak.jpg?v=1760522773&width=720'
        },
        {
            name: 'VELINA INSPIRED BY BURBURY WEEKEND',
            orignal_price: 2000.00,
            dicounted_price: 1699.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Peak_Breeze_ebff756b-2f75-4d81-bb82-fb443abad2ea.jpg?v=1760523055&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/ELyscents-Peak-Breeze.jpg?v=1760523055&width=360'
        },
    ]

    useEffect(() => {
        // const filterProducts = data.filter(item => item.dicounted_price < 1700);
        // setForHim(filterProducts)
        setForHim(data)
    }, [])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])


    const CartItem = (value: IForHimType, index: number) => (
        <div className={style.carts_prnt} key={index}>
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
                <h2 className={style.heading_txt}>PERFUME FOR HIM</h2>
            </div>

            <div className={style.cart_sec_main}>
                {!isMobile ? (
                    <div className={style.crazydeal_parnt}>
                        {ForHim.map((value: IForHimType, index: number) =>
                            CartItem(value, index)
                        )}
                    </div>
                ) : (
                    <Swiper slidesPerView={1.2} spaceBetween={15}>
                        {ForHim.map((value, index) => (
                            <SwiperSlide key={index}>
                                {CartItem(value, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                    <div className={style.view_btn}>
                    <Link href="/forHim">
                        <button>VIEW ALL</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default For_him
