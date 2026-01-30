'use client'
import React, { useEffect, useState } from 'react'
import style from './crazyDeal.module.scss'
import { VscSettings } from "react-icons/vsc";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const data = [
    {
        id: 1,
        name: '4X PERFUME BUNDLE',
        orignal_price: 7596.00,
        dicounted_price: 5599.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=360',
        img_src2: 'https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=360'
    },
    {
        id: 2,
        name: '3X PERFUME BUNDLE',
        orignal_price: 5700.00,
        dicounted_price: 4444.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/3_perfume_Deal.jpg?v=1760181185&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360',
    },
    {
        id: 3,
        name: 'THE PERFECT DUO',
        orignal_price: 3700.00,
        dicounted_price: 2999.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=720',
        img_src2: 'https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=720'
    },
    {
        id: 4,
        name: '6X MEGA DEAL',
        orignal_price: 11400.00,
        dicounted_price: 8399.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=540',
        img_src2: 'https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=540'
    },
    {
        id: 5,
        name: 'OUD DUO COMBO',
        orignal_price: 3900.00,
        dicounted_price: 3199.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=360',
        img_src2: 'https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=360'
    },
    {
        id: 6,
        name: 'TOP 3 BEST SELLERS',
        orignal_price: 5600.00,
        dicounted_price: 4400.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=360',
        img_src2: 'https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=360'
    },
    {
        id: 7,
        name: 'OFFICE DEAL',
        orignal_price: 5700.00,
        dicounted_price: 4400.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=360',
        img_src2: 'https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=360'
    },
    {
        id: 8,
        name: 'TESTER BOX',
        orignal_price: 1250.00,
        dicounted_price: 990.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/testerbox1.jpg?v=1760517576&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/testerbox2.jpg?v=1760517577&width=360'
    },
]

type ICrazyProductsType = {
    id: number,
    name: string,
    orignal_price: number,
    dicounted_price: number,
    img_src1: string,
    img_src2: string
}
const CrazyDeal = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [CrazyProducts, setCrazyProducts] = useState<ICrazyProductsType[]>([])

    useEffect(() => {
        setCrazyProducts(data)
    }, [])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    const CartItem = (value: ICrazyProductsType, index: number) => (
        <div className={style.carts_prnt} key={index}>
            <div className={style.cart_image}>
                <Link
                    href={{
                        pathname: "/productDetails",
                        query: { id: value.id },
                    }}
                >
                    <img
                        src={
                            !isMobile && hoverIndex === index
                                ? value.img_src2
                                : value.img_src1
                        }
                        onMouseEnter={() => !isMobile && setHoverIndex(index)}
                        onMouseLeave={() => !isMobile && setHoverIndex(null)}
                        alt={value.name}
                    />
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
                <button className={style.cart_btn} >Add to Cart</button>
            </div>
        </div>
    );
    const filterFunction = (type: string) => {
        if (type === "A-Z") {
            const sortedByAlpha = [...data].sort(
                (a, b) => a.name.localeCompare(b.name)
            )
            setCrazyProducts(sortedByAlpha)
        }

        else if (type === "Z-A") {
            const sortByReverseAlpha = [...data].sort(
                (a, b) => b.name.localeCompare(a.name)
            )
            setCrazyProducts(sortByReverseAlpha)
        }
        else if (type === "HighestPrice") {
            const sortHigherPrice = [...data].sort(
                (a, b) => b.dicounted_price - a.dicounted_price
            )
            setCrazyProducts(sortHigherPrice)
        }
        else if (type === "LowerPrice") {
            const sortByLowestPrice = [...data].sort(
                (a, b) => a.dicounted_price - b.dicounted_price
            )
            setCrazyProducts(sortByLowestPrice)
        }
        else {
            setCrazyProducts(data)
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
                            <p className={style.array_products}> {data.length} products</p>
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
                        {CrazyProducts.map((value, index) =>
                            CartItem(value, index)
                        )}
                    </div>
                ) : (
                    <Swiper slidesPerView={1.2} spaceBetween={15}>
                        {CrazyProducts.map((value, index) => (
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

export default CrazyDeal
