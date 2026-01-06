'use client'
import React, { useState } from 'react'
import Image from '@/src/components/mn_image/image'
import Crazy_deal from '../crazy_deals/crazy_deal'
import Scents_deal from '@/src/components/scents_image/scents_deal'
import Best_seller from '@/src/components/best_seller_sec/best_seller'
import Perfect_duo_image from '@/src/components/theperfect_duo_image/perfect_duo_image'
import For_her_sec from '@/src/components/perfume_for_her/for_her_sec'
import For_him from '@/src/components/perfume_for_him/for_him'
import Oud_collection from '@/src/components/oud_collection_sec/oud_collection'
import Our_collection_img from '@/src/components/our_product_collection_image/our_collection_img'
import Customer_saying from '@/src/components/customer_says/customer_saying'
import Our_outlets from '@/src/components/our_retail_outlets/our_outlets'
import Footer from '@/src/shared_components/footer/footer'

const HomePage = () => {

    const [ScentsDetImg, setScentsDetImg] = useState(
        "https://elyscents.pk/cdn/shop/files/center_BAnner_new_size_3.jpg?v=1760429422&width=1920"
    )

    const [PerfectDuo, setPerfectDuo] = useState(
        "https://elyscents.pk/cdn/shop/files/center_BAnner_new_size_3000x1200_0b8e836f-955d-4aa5-99c6-f94497b4aab7.jpg?v=1760429421&width=1920"
    )

    return (

        <>
            <Image />
            <Crazy_deal />
            <Scents_deal ScentsDetImg={ScentsDetImg} />
            <Best_seller />
            <Perfect_duo_image PerfectDuo={PerfectDuo} />
            <For_her_sec />
            <For_him />
            <Oud_collection />
            <Our_collection_img />
            <Customer_saying />
            <Our_outlets />
        </>


    )
}

export default HomePage
