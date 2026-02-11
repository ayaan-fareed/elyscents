"use client";
import React, { useEffect, useState } from 'react'
import style from './all_perfumes.module.scss'
import { VscSettings } from "react-icons/vsc";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useRouter } from 'next/navigation'
import { products } from '@/src/data/products';

const AllPerfumes = () => {

    const [collectionMage, setcollectionMage] = useState([
        {
            title: 'NEW',
            img_src: "https://elyscents.pk/cdn/shop/files/Dreame.jpg?v=1760523421&width=540",
            link: '/forHim'
        },
        {
            title: 'MEN',
            img_src: "https://elyscents.pk/cdn/shop/files/rosy_Blossom.jpg?v=1760536616&width=540",
            link: '/forHer'
        },
        {
            title: 'UNISEX',
            img_src: "https://elyscents.pk/cdn/shop/collections/unisex_01.jpg?v=1760594011&width=540",
            link: '/oudCollection'
        },
        {
            title: 'OUD COLLECTION',
            img_src: "https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=540",
            link: '/oudCollection'
        },
        {
            title: 'BEST SELLER PERFUMES',
            img_src: "https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=540",
            link: '/best_sellers'
        },
        {
            title: 'NEW ARRIVALS',
            img_src: "https://elyscents.pk/cdn/shop/collections/4.jpg?v=1760593987&width=540",
            link: '/forHim'
        },
        {
            title: 'CRAZY DEALS',
            img_src: "https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=540",
            link: '/crazy_deals'
        },
    ],)

    // const data = [
    //     {
    //         name: 'ROYAL OUD',
    //         orignal_price: 2100.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540',
    //     },

    //     {
    //         name: 'SALSA SPIRIT - INPIRED BY CREED',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Salsa_Spirit_40a4eff5-1c16-4bf3-97ad-bcec31a39ded.jpg?v=1760523136&width=1800',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Salsa-Spirit.jpg?v=1760523136&width=540'
    //     },

    //     {
    //         name: 'ZARAK INSPIRED BY AZZARO WANTED',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/zarak.jpg?v=1760522773&width=720',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Zarak.jpg?v=1760522773&width=540'
    //     },
    //     {
    //         name: 'EXOTIC PULSE',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Exotic_Pulse_ca40f1a2-26bb-4ae9-bab5-29e6182ef259.jpg?v=1760523043&width=720',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Exotic-Pulse.jpg?v=1760523043&width=720',
    //     },
    //     {
    //         name: 'WILD ESSENCE - INSPIRED BY DIOR',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/wild_Essence_121a55f5-0fa0-4e3f-9284-ff361b4feda5.jpg?v=1760523219&width=720',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Wild-Esscense.jpg?v=1760523219&width=720'

    //     },
    //     {
    //         name: 'DREAM OUD - INPIRED BY NOMAD',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1699.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540'
    //     },

    //     {
    //         name: 'Mystic Pulse - INSPIRED BY Gucci',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1599.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/mystic_Pulse.jpg?v=1760523149&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Mystic-Pulse.jpg?v=1760523149&width=720'
    //     },
    //     {
    //         name: 'GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Green_Elixer.jpg?v=1760523069&width=720',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Green-Elixir.jpg?v=1760523069&width=360'
    //     },
    //     {
    //         name: 'Rebel Bloom Inspired By Tommy',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=360'
    //     },

    //     {
    //         name: 'OUD EVERGREEN INPIRED BY WHITE OUD',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_EverGreen.jpg?v=1760523484&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Evergreen.jpg?v=1760523484&width=540'
    //     },
    //     {
    //         name: 'RESHAM OUD _ INPIRED BY AMBER',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/resham_oud.jpg?v=1760523035&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Resham-Oud.jpg?v=1760523035&width=540'
    //     },
    //     {
    //         name: 'OUD VELVET - INPIRED BY SATIN',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540'
    //     },
    //     {
    //         name: 'Velina Inspired By Burbury Weekend',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=360'
    //     },
    //     {
    //         name: 'DARK RAVEN INPIRED BY BLACK OPIUM',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/dark_reven.jpg?v=1760522570&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dark-Raven.jpg?v=1760522570&width=360'
    //     },
    //     {
    //         name: 'OUD VELVET - INPIRED BY SATIN',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540'
    //     },
    //     {
    //         name: 'Berry Grace Inspired By Burbury',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=360'
    //     },
    //     {
    //         name: 'DREAM INPIRED BY JANNAN',
    //         orignal_price: 2000,
    //         dicounted_price: 1899.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Dreame.jpg?v=1760523421&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream.jpg?v=1760523421&width=360'
    //     },
    //     {
    //         name: 'DREAM OUD - INPIRED BY NOMAD',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1699.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540'
    //     },
    //     {
    //         name: 'OUD VELVET - INPIRED BY SATIN',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1799.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540'
    //     },
    //     {
    //         name: 'Floral Muse - INSPIRED BY Gucci',
    //         orignal_price: 2000.00,
    //         dicounted_price: 1699.00,
    //         img_src1: 'https://elyscents.pk/cdn/shop/files/Floral_Muse.jpg?v=1760523165&width=1080',
    //         img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Floral-Muse.jpg?v=1760523165&width=360'

    //     },
    // ]

    type ICrazyProductsType = {
        id: number,
        name: string,
        orignal_price: number,
        dicounted_price: number,
        img_src1: string,
        img_src2: string,
    }

    const [hoverIndex, setHoverIndex] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [CrazyProducts, setCrazyProducts] = useState<ICrazyProductsType[]>([])
    const router = useRouter()

    useEffect(() => {
        setCrazyProducts(products)
    }, [])

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768)
    }, [])

    const CartItem = (value: ICrazyProductsType, index: number) => (
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
                <button className={style.cart_btn} >Add to Cart</button>
            </div>
        </div>
    );
    const filterFunction = (type: string) => {
        if (type === "A-Z") {
            const sortedByAlpha = [...products].sort(
                (a, b) => a.name.localeCompare(b.name)
            )
            setCrazyProducts(sortedByAlpha)
        }

        else if (type === "Z-A") {
            const sortByReverseAlpha = [...products].sort(
                (a, b) => b.name.localeCompare(a.name)
            )
            setCrazyProducts(sortByReverseAlpha)
        }
        else if (type === "HighestPrice") {
            const sortHigherPrice = [...products].sort(
                (a, b) => b.dicounted_price - a.dicounted_price
            )
            setCrazyProducts(sortHigherPrice)
        }
        else if (type === "LowerPrice") {
            const sortByLowestPrice = [...products].sort(
                (a, b) => a.dicounted_price - b.dicounted_price
            )
            setCrazyProducts(sortByLowestPrice)
        }
        else {
            setCrazyProducts(products)
        }
    }
    return (
        <>
            <div>
                <div className={style.image_cont}>
                    <img src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770&width=1920" alt="img" className={style.mn_image} />
                </div>

                <div className={style.prnt_div}>
                    <div className={style.image_container} >

                        {collectionMage.map((item, index) => (
                            <div className={style.image_styling} key={index} onClick={() => router.push(item.link)}>
                                <h2 className={style.img_txt}>{item.title}</h2>
                                <img src={item.img_src}
                                    alt="" className={style.collection_img} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.cart_sec_main}>
                    <div className={style.main_container}>
                        <div className={style.filter_sec}>
                            <div>
                                <p className={style.array_products}> {CrazyProducts.length} products</p>
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
            </div>

        </>
    )
}

export default AllPerfumes