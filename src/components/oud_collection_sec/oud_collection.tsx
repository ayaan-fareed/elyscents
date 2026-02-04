'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './oud_colllection.module.scss'
import Link from 'next/link'
import { products, categories } from '@/src/data/products'

type IOudProductsType = {
    id: number,
    name: string,
    orignal_price: number,
    dicounted_price: number,
    img_src1: string,
    img_src2: string,
    big_img: string,
    category: number,
}

const Oud_collection = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [OudProducts, setOudProducts] = useState<IOudProductsType[]>([])

    useEffect(() => {
        let  oudProducts = products.filter((value)=> value.category == 5)
        setOudProducts(oudProducts)
    }, [])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    const CartItem = (value: IOudProductsType, index: number) => (
        <div className={style.carts_prnt} key={index}>
            <div className={style.cart_image}>
                   <Link href={`/productDetails/${value.id}`}>
                    <img src={!isMobile && hoverIndex === index ? value.img_src2 : value.img_src1}
                        onMouseEnter={() => !isMobile && setHoverIndex(index)}
                        onMouseLeave={() => !isMobile && setHoverIndex(null)} alt={value.name} />
                </Link>
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
                <button className={style.cart_btn}>
                    <Link href={`/productDetails/${value.id}`}>
                        Add to Cart
                    </Link>
                </button>
            </div>
        </div>
    )
    return (
        <>
            <div className={style.deals_sec}>
                <h2 className={style.heading_txt}>OUD COLLECTION</h2>
            </div>

            <div className={style.cart_sec_main}>
                {!isMobile ? (
                    <div className={style.crazydeal_parnt}>
                        {OudProducts.map((value: IOudProductsType, index: number) =>
                            CartItem(value, index)
                        )}
                    </div>
                ) : (
                    <Swiper slidesPerView={1.2} spaceBetween={15}>
                        {OudProducts.map((value: IOudProductsType, index: number) => (
                            <SwiperSlide key={index}>
                                {CartItem(value, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                <div className={style.view_btn}>
                    <Link href="/oudCollection">
                        <button>VIEW ALL</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Oud_collection