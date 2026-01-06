import React from 'react'
import style from './scetns_deal.module.scss'
import { useState } from 'react'

type IScentsDealProps = {
    ScentsDetImg : string
}
const Scents_deal = ({ScentsDetImg}:IScentsDealProps) => {
    console.log(ScentsDetImg)
    return (
        <>
            <div className={style.deal_image}>
                <img src="https://elyscents.pk/cdn/shop/files/center_BAnner_new_size_3.jpg?v=1760429422&width=1920" 
                alt="" className={style.scents_img} />
            </div>
        </>
    )
}

export default Scents_deal
