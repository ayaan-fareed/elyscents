import React from 'react'
import style from './perfect_duo_image.module.scss'
import { useState } from 'react'

type IPerfectDuoImageProps = {
    PerfectDuo: string,
}
const Perfect_duo_image = ({ PerfectDuo }: IPerfectDuoImageProps) => {
    return (
        <>
            <div className={style.the_duo_image}>
                <img src={PerfectDuo}
                    alt="" className={style.duo_img} />
            </div>
        </>
    )
}

export default Perfect_duo_image
