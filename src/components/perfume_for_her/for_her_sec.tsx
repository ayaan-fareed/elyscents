'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './for_her_sec.module.scss'

const For_her_sec = () => {
const[hoverIndex, setHoverIndex] = useState<any>(null)
 const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const forher_products = [

        {
            name: 'ROSE BLOSSOM - INSPIRED BY Gucci',
            orignal_price:2000,
            dicounted_price: 1699.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/rosy_Blossom.jpg?v=1760536616&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Rosy-Blossom.jpg?v=1760536616&width=720'
        },

        {
            name: 'Flora Fantasy - INSPIRED BY Jadore',
            orignal_price: 2000.00,
            dicounted_price: 1599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Flora_Fantasy.jpg?v=1760523186&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Flora-Fantasy.jpg?v=1760523186&width=360',
        },

        {
            name: 'Berry Grace Inspired By Burbury',
            orignal_price: 2000.00,
            dicounted_price:  1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Beryy-Grace.jpg?v=1760522656&width=360'
        },
        {
            name: 'Mystic Pulse - INSPIRED BY Gucci',
            orignal_price: 2000.00,
            dicounted_price: 1599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/mystic_Pulse.jpg?v=1760523149&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Mystic-Pulse.jpg?v=1760523149&width=720'
        },
        {
            name: 'Rebel Bloom Inspired By Tommy',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/rebel_bloom.jpg?v=1760522809&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Rebel-Bloom.jpg?v=1760522809&width=360'
        },

        {
            name: 'Floral Muse - INSPIRED BY Gucci',
            orignal_price: 2000.00,
            dicounted_price: 1699.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Floral_Muse.jpg?v=1760523165&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Floral-Muse.jpg?v=1760523165&width=360'

        },
        {
            name: 'Empress Whif - INSPIRED BY Bombshell',
            orignal_price: 2000.00,
            dicounted_price: 1599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/Empress_whiff.jpg?v=1760523195&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Empress-Whiff.jpg?v=1760523195&width=720'
        },
        {
            name: 'Velina Inspired By Burbury Weekend',
            orignal_price: 2000.00,
            dicounted_price: 1899.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/velina_2323b953-0e39-4cdb-899e-bd1faeb68d9d.jpg?v=1760522545&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscent-Velina.jpg?v=1760522545&width=360'
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
                <h2 className={style.heading_txt}>PERFUME FOR HER</h2>
            </div>

           <div className={style.cart_sec_main}>
        {!isMobile ? (
          <div className={style.crazydeal_parnt}>
            {forher_products.map((value, index) =>
              CartItem(value, index)
            )}
          </div>
        ) : (
          <Swiper slidesPerView={1.2} spaceBetween={15}>
            {forher_products.map((value, index) => (
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

export default For_her_sec
