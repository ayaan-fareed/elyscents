import React, { useState } from 'react'
import style from './all_perfumes.module.scss'

const AllPerfumes = () => {

    const [collectionMage, setcollectionMage] = useState([
        {
            title: 'NEW',
            img_src: "https://elyscents.pk/cdn/shop/collections/4.jpg?v=1760593987&width=540",
        },
        {
            title: 'MEN',
            img_src: "https://elyscents.pk/cdn/shop/collections/perfume_for_men.jpg?v=1760593925&width=540",
        },
        {
            title: 'WOMEN',
            img_src: "https://elyscents.pk/cdn/shop/collections/women_profile.jpg?v=1760593894&width=540",
        },
        {
            title: 'UNISEX',
            img_src: "https://elyscents.pk/cdn/shop/collections/unisex_01.jpg?v=1760594011&width=540",
        },
    ],)

    return (
        <>
            <div className={style.image_cont}>
                <img src="https://elyscents.pk/cdn/shop/files/elyscents-banner.jpg?v=1716647770&width=1920" alt="img" className={style.mn_image} />
            </div>

            <div className={style.prnt_div}>
                <div className={style.heading_text}>
                    <h2>OUR PRODUCT COLLECTIONS</h2>
                </div>
                <div className={style.image_container} >

                    {collectionMage.map((item, index) => (
                        <div className={style.image_styling} key={index} >
                            <h2 className={style.img_txt}>{item.title}</h2>
                            <img src={item.img_src
                            }
                                alt="" className={style.collection_img} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllPerfumes
