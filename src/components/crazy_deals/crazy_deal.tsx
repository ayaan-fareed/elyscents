'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import style from './crazy_deal.module.scss'
import Link from 'next/link';

const data = [
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

  // BEST SELLERS //

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

  //OUD COLLLECTION//

  {
    name: 'OUD MAJESTY INSPIRED BY SHAMS',
    orignal_price: 2000.00,
    dicounted_price: 1899.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_majesty.jpg?v=1760523188&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Majesty.jpg?v=1760523200&width=540'
  },

  {
    name: '3X PERFUME BUNDLE',
    orignal_price: 2000.00,
    dicounted_price: 1799.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Essence.jpg?v=1760523123&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Esscense.jpg?v=1760523123&width=540',
  },

  {
    name: 'DREAM OUD - INPIRED BY NOMAD',
    orignal_price: 2000.00,
    dicounted_price: 1699.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Dream_Oud.jpg?v=1760522968&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Dream-Oud.jpg?v=1760522968&width=540'
  },
  {
    name: 'OUD VELVET - INPIRED BY SATIN',
    orignal_price: 2000.00,
    dicounted_price: 1799.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_Velvet.jpg?v=1760522977&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Velvet.jpg?v=1760522977&width=540'
  },
  {
    name: 'ROYAL OUD',
    orignal_price: 2100.00,
    dicounted_price: 1799.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Royal_Oud_32df109e-c80d-4239-8c63-9f9a5a3ac58b.jpg?v=1760522995&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Royal-Oud.jpg?v=1760522995&width=540'
  },

  {
    name: 'OUD EVERGREEN INPIRED BY WHITE OUD',
    orignal_price: 2000.00,
    dicounted_price: 1899.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Oud_EverGreen.jpg?v=1760523484&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Oud-Evergreen.jpg?v=1760523484&width=540'
  },
  {
    name: 'RESHAM OUD _ INPIRED BY AMBER',
    orignal_price: 2000.00,
    dicounted_price: 1899.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/resham_oud.jpg?v=1760523035&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Resham-Oud.jpg?v=1760523035&width=540'
  },
  {
    name: 'CRYSTAL OUD _ INPIRED BY ONE MAN',
    orignal_price: 2000.00,
    dicounted_price: 1899.00,
    img_src1: 'https://elyscents.pk/cdn/shop/files/Crystal_Oud.jpg?v=1760523084&width=1080',
    img_src2: 'https://elyscents.pk/cdn/shop/files/Elyscents-Crystal-Oud.jpg?v=1760523084&width=540'
  },

  //FOR HER SEC//

  {
    name: 'ROSE BLOSSOM - INSPIRED BY Gucci',
    orignal_price: 2000,
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
    dicounted_price: 1899.00,
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

  // FOR HIM SEC//

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

type ICrazyProductsType = {
  name: string,
  orignal_price: number,
  dicounted_price: number,
  img_src1: string,
  img_src2: string
}
const Crazy_deal = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [CrazyProducts, setCrazyProducts] = useState<ICrazyProductsType[]>([])

  // useEffect(() => {
  //     const sortedByLowPrice = [...data].sort(

  //     (a, b) => b.dicounted_price - a.dicounted_price
  //   )
  //   setCrazyProducts(sortedByLowPrice)
  //        console.log(sortedByLowPrice)

  // }, [])


  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])


  const CartItem = (value: ICrazyProductsType, index: number) => (
    <div className={style.carts_prnt} key={index}>
      <div className={style.cart_image}>
        <img
          src={
            !isMobile && hoverIndex === index
              ? value.img_src2
              : value.img_src1
          }
          onMouseEnter={() => !isMobile && setHoverIndex(index)}
          onMouseLeave={() => !isMobile && setHoverIndex(null)} alt={value.name} />
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

  ////////////////////////////////////////////////NEW CODE////////////////////////////////////////////
  useEffect(() => {
    if (data.length > 0) {
      setCrazyProducts(data);
    }
  }, [data]);

  const filterFunction = (type: string) => {
    let sortedData = [...data];

    if (type === "A") {
      console.log(type)

      sortedData.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    else if (type === "b") {
      console.log(type)
      sortedData.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    else if (type === "c") {
      console.log(type)
      sortedData.sort(
        (a, b) => b.dicounted_price - a.dicounted_price
      );
    }

    else if (type === "D") {
      console.log(type)
      sortedData.sort(
        (a, b) => a.dicounted_price - b.dicounted_price
      );
      setCrazyProducts(sortedData);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className={style.filter_btn}>
        <h1>Filter</h1>
        <button onClick={() => filterFunction("A")}>A to Z</button>
        <button onClick={() => filterFunction("b")}>Z to A</button>
        <button onClick={() => filterFunction("c")}>HighestPrice</button>
        <button onClick={() => filterFunction("D")}>LowestPrice</button>
      </div>
      <div className={style.deals_sec}>
        <h2 className={style.heading_txt}>CRAZY DEALS</h2>
      </div>

      <div className={style.cart_sec_main}>
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
        <div className={style.view_btn}>
          <Link href="/viewAllBtn_crazyDeal">
            <button>VIEW ALL</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Crazy_deal
