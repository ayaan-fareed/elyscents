'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './crazy_deal.module.scss'

const Crazy_deal = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

const crazy_products = [
        {
            name: '4X PERFUME BUNDLE',
            orignal_price: 7596.00,
            dicounted_price: 5599.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=360',
            img_src2: 'https://elyscents.pk/cdn/shop/files/4_perfume_new_1.jpg?v=1764960763&width=360'
        },
        {
            name: '3X PERFUME BUNDLE',
            orignal_price: 5700.00,
            dicounted_price: 4444.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/3_perfume_Deal.jpg?v=1760181185&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360',
        },
        {
            name: 'THE PERFECT DUO',
            orignal_price: 3700.00,
            dicounted_price: 2999.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=720',
            img_src2: 'https://elyscents.pk/cdn/shop/files/perfect_Duo_2.0.jpg?v=1760428407&width=720'
        },
        {
            name: '6X MEGA DEAL',
            orignal_price: 11400.00,
            dicounted_price: 8399.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=540',
            img_src2: 'https://elyscents.pk/cdn/shop/files/SKU.jpg?v=1764765674&width=540'
        },
        {
            name: 'OUD DUO COMBO',
            orignal_price: 3900.00,
            dicounted_price: 3199.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=360',
            img_src2: 'https://elyscents.pk/cdn/shop/files/ouddeal_1.jpg?v=1766596989&width=360'
        },
        {
            name: 'TOP 3 BEST SELLERS',
            orignal_price: 5600.00,
            dicounted_price: 4400.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=360',
            img_src2: 'https://elyscents.pk/cdn/shop/files/image_5.png?v=1763039447&width=360'
        },
        {
            name: 'OFFICE DEAL',
            orignal_price: 5700.00,
            dicounted_price: 4400.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=360',
            img_src2: 'https://elyscents.pk/cdn/shop/files/officedeal.jpg?v=1765439449&width=360'
        },
        {
            name: 'TESTER BOX',
            orignal_price: 1250.00,
            dicounted_price: 990.00,
            img_src1: 'https://elyscents.pk/cdn/shop/files/testerbox1.jpg?v=1760517576&width=1080',
            img_src2: 'https://elyscents.pk/cdn/shop/files/testerbox2.jpg?v=1760517577&width=360'
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
          alt={value.name}/>
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
        <h2 className={style.heading_txt}>CRAZY DEALS</h2>
      </div>

      <div className={style.cart_sec_main}>
        {!isMobile ? (
          <div className={style.crazydeal_parnt}>
            {crazy_products.map((value, index) =>
              CartItem(value, index)
            )}
          </div>
        ) : (
          <Swiper slidesPerView={1.2} spaceBetween={15}>
            {crazy_products.map((value, index) => (
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

export default Crazy_deal
