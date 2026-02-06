'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './oudCollec.module.scss'
import { products } from '@/src/data/products'
import Link from 'next/link'

type IbestProductsType = {
    name: string,
    orignal_price: number,
    dicounted_price: number,
    img_src1: string,
    img_src2: string,
    id: number,
}

// const data = [

//             {
//                 name: 'OUD MAJESTY INSPIRED BY SHAMS',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1899.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540'
//             },

//             {
//                 name: '3X PERFUME BUNDLE',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1799.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540',
//             },

//             {
//                 name: 'DREAM OUD - INPIRED BY NOMAD',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1699.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540'
//             },
//             {
//                 name: 'OUD VELVET - INPIRED BY SATIN',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1799.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540'
//             },
//             {
//                 name: 'ROYAL OUD',
//                 orignal_price: 2100.00,
//                 dicounted_price: 1799.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540'
//             },

//             {
//                 name: 'OUD EVERGREEN INPIRED BY WHITE OUD',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1899.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_EverGreen.jpg?v=1760523484&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Evergreen.jpg?v=1760523484&width=540'
//             },
//             {
//                 name: 'RESHAM OUD _ INPIRED BY AMBER',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1899.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/resham_oud.jpg?v=1760523035&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Resham-Oud.jpg?v=1760523035&width=540'
//             },
//             {
//                 name: 'CRYSTAL OUD _ INPIRED BY ONE MAN',
//                 orignal_price: 2000.00,
//                 dicounted_price: 1899.00,
//                 img_src1: 'https://elyscents.pk/cdn/shop/files/Crystal_Oud.jpg?v=1760523084&width=1080',
//                 img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Crystal-Oud.jpg?v=1760523084&width=540'
//             },
//         ]

const oudCollec = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [bestProducts, setbestProducts] = useState<IbestProductsType[]>([])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    useEffect(() => {
        let bstSellers = products.filter((value) => value.category == 5)
        setbestProducts(bstSellers)
    }, [])



    const CartItem = (value: IbestProductsType, index: number) => (
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
    );

    const filterFunction = (type: string) => {
        if (type === "A-Z") {
            const sortedByAlpha = [...bestProducts].sort(
                (a, b) => a.name.localeCompare(b.name)
            )
            setbestProducts(sortedByAlpha)
        }

        else if (type === "Z-A") {
            const sortByReverseAlpha = [...bestProducts].sort(
                (a, b) => b.name.localeCompare(a.name)
            )
            setbestProducts(sortByReverseAlpha)
        }
        else if (type === "HighestPrice") {
            const sortHigherPrice = [...bestProducts].sort(
                (a, b) => b.dicounted_price - a.dicounted_price
            )
            setbestProducts(sortHigherPrice)
        }
        else if (type === "LowerPrice") {
            const sortByLowestPrice = [...bestProducts].sort(
                (a, b) => a.dicounted_price - b.dicounted_price
            )
            setbestProducts(sortByLowestPrice)
        }
        else {
            setbestProducts(bestProducts)
        }
    }

    return (
        <>
            <div className={style.image_cont}>
                <img src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770&width=1920" alt="img" className={style.mn_image} />
            </div>

            <div className={style.cart_sec_main}>

                <div className={style.main_container}>
                    <div className={style.filter_sec}>
                        <div>
                            <p className={style.array_products}> {bestProducts.length} products</p>
                        </div>
                        <div className={style.select_wrapper}>
                            <select onChange={(e) => filterFunction(e.target.value)}>
                                <option selected value="featured">Featured</option>
                                <option value="A-Z">Alphabetically, A-Z</option>
                                <option value="Z-A">Alphabetically, Z-A</option>
                                <option value="LowerPrice">Price, low to high</option>
                                <option value="HighestPrice">Price, high to low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {!isMobile ? (
                    <div className={style.crazydeal_parnt}>
                        {bestProducts.map((value, index) =>
                            CartItem(value, index)
                        )}
                    </div>
                ) : (
                    <Swiper slidesPerView={1.2} spaceBetween={15}>
                        {bestProducts.map((value, index) => (
                            <SwiperSlide key={index}>
                                {CartItem(value, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </>
    )
}

export default oudCollec
