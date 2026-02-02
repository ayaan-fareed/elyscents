'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './forHer.module.scss'
import Link from 'next/link'

type IproductsType = {
    id: number,
    name: string,
    orignal_price: number,
    dicounted_price: number,
    img_src1: string,
    img_src2: string,
}

const data = [

    {
        id: 1,
        name: 'ROSE BLOSSOM - INSPIRED BY Gucci',
        orignal_price: 2000,
        dicounted_price: 1699.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/rosy_Blossom.jpg?v=1760536616&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Rosy-Blossom.jpg?v=1760536616&width=720'
    },

    {
        id: 2,
        name: 'Flora Fantasy - INSPIRED BY Jadore',
        orignal_price: 2000.00,
        dicounted_price: 1599.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/Flora_Fantasy.jpg?v=1760523186&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Flora-Fantasy.jpg?v=1760523186&width=360',
    },

    {
        id: 3,
        name: 'Berry Grace Inspired By Burbury',
        orignal_price: 2000.00,
        dicounted_price: 1899.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=360'
    },
    {
        id: 4,
        name: 'Mystic Pulse - INSPIRED BY Gucci',
        orignal_price: 2000.00,
        dicounted_price: 1599.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/mystic_Pulse.jpg?v=1760523149&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Mystic-Pulse.jpg?v=1760523149&width=720'
    },
    {
        id: 5,
        name: 'Rebel Bloom Inspired By Tommy',
        orignal_price: 2000.00,
        dicounted_price: 1899.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=360'
    },

    {
        id: 6,
        name: 'Floral Muse - INSPIRED BY Gucci',
        orignal_price: 2000.00,
        dicounted_price: 1699.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/Floral_Muse.jpg?v=1760523165&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Floral-Muse.jpg?v=1760523165&width=360'

    },
    {
        id: 7,
        name: 'Empress Whif - INSPIRED BY Bombshell',
        orignal_price: 2000.00,
        dicounted_price: 1599.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/Empress_whiff.jpg?v=1760523195&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Empress-Whiff.jpg?v=1760523195&width=720'
    },
    {
        id: 8,
        name: 'Velina Inspired By Burbury Weekend',
        orignal_price: 2000.00,
        dicounted_price: 1899.00,
        img_src1: 'https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080',
        img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=360'
    },
]

const ForHer = () => {
    const [hoverIndex, setHoverIndex] = useState<any>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [products, setProducts] = useState<IproductsType[]>([])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    useEffect(() => {
        setProducts(data)
    }, [])



    const CartItem = (value: IproductsType, index: number) => (
        <div className={style.carts_prnt} key={index}>
            <div className={style.cart_image}>
                <Link href={{
                    pathname: "/productDetails",
                    query: { id: value.id },
                }}>
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
                <button className={style.cart_btn}>Add to Cart</button>
            </div>
        </div>
    );

    const filterFunction = (type: string) => {
        if (type === "A-Z") {
            const sortedByAlpha = [...data].sort(
                (a, b) => a.name.localeCompare(b.name)
            )
            setProducts(sortedByAlpha)
        }

        else if (type === "Z-A") {
            const sortByReverseAlpha = [...data].sort(
                (a, b) => b.name.localeCompare(a.name)
            )
            setProducts(sortByReverseAlpha)
        }
        else if (type === "HighestPrice") {
            const sortHigherPrice = [...data].sort(
                (a, b) => b.dicounted_price - a.dicounted_price
            )
            setProducts(sortHigherPrice)
        }
        else if (type === "LowerPrice") {
            const sortByLowestPrice = [...data].sort(
                (a, b) => a.dicounted_price - b.dicounted_price
            )
            setProducts(sortByLowestPrice)
        }
        else {
            setProducts(data)
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
            </div>
        </>
    )
}

export default ForHer
