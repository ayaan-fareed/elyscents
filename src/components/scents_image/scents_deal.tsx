import React from 'react'
import style from './scetns_deal.module.scss'
import { useState } from 'react'

type IScentsDealProps = {
    ScentsDetImg : string
}
const Scents_deal = ({ScentsDetImg}:IScentsDealProps) => {
    return (
        <>
            <div className={style.deal_image}>
                <img src={ScentsDetImg}
                alt="" className={style.scents_img} />
            </div>
        </>
    )
}

export default Scents_deal
