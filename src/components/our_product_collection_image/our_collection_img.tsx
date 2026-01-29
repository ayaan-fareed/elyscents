'use client'

import React, { useState } from 'react'
import style from './our_collection.module.scss'
import { useRouter } from 'next/navigation'

const Our_collection_img = () => {
    const router = useRouter()

    const [ProductCollections] = useState([
        {
            title: 'NEW',
            img_src: 'https://elyscents.pk/cdn/shop/collections/4.jpg?v=1760593987&width=540',
            link: '/forHim',
        },
        {
            title: 'MEN',
            img_src: 'https://elyscents.pk/cdn/shop/collections/perfume_for_men.jpg?v=1760593925&width=540',
            link: '/forHim',
        },
        {
            title: 'WOMEN',
            img_src: 'https://elyscents.pk/cdn/shop/collections/women_profile.jpg?v=1760593894&width=540',
            link: '/forHer',
        },
        {
            title: 'UNISEX',
            img_src: 'https://elyscents.pk/cdn/shop/collections/unisex_01.jpg?v=1760594011&width=540',
            link: '/oudCollection',
        },
    ])

    return (
        <div className={style.prnt_div}>
            <div className={style.heading_text}>
                <h2>OUR PRODUCT COLLECTIONS</h2>
            </div>

            <div className={style.image_container}>
                {ProductCollections.map((item, index) => (
                    <div key={index}
                        className={style.image_styling}
                        onClick={() => router.push(item.link)} style={{ cursor: 'pointer' }}>
                        <h2 className={style.img_txt}>{item.title}</h2>
                        <img
                            src={item.img_src}
                            alt=""
                            className={style.collection_img}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Our_collection_img
