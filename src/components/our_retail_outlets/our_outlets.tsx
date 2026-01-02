import React from 'react'
import style from './our_outlets.module.scss'
import { BsShop } from "react-icons/bs";

const Our_outlets = () => {
    return (
        <>
            <div className={style.outlets_cont}>
                <div className={style.main_heading}>
                    <h2>OUR RETAIL OUTLETS</h2>
                </div>

                <div className={style.outlets_parnt}>
                    <div className={style.mega_outlet}>
                        <div className={style.shop_icon}>
                            <BsShop />
                        </div>
                        <div className={style.outlet_name}>
                            <h2>MEGA OUTLET</h2>
                        </div>
                        <div className={style.shop_address}>
                            <p>A219 Gulshan Block 3, KDA Market Near to Florish Saloon, Karachi</p>
                        </div>
                    </div>

                    <div className={style.mega_outlet}>
                        <div className={style.shop_icon}>
                            <BsShop />
                        </div>
                        <div className={style.outlet_name}>
                            <h2>OCEAN MALL</h2>
                        </div>
                        <div className={style.shop_address}>
                            <p>Shop no 219, second Floor at Ocean Mall</p>
                        </div>
                    </div>

                    <div className={style.mega_outlet}>
                        <div className={style.shop_icon}>
                            <BsShop />
                        </div>
                        <div className={style.outlet_name}>
                            <h2>NORTH WALK</h2>
                        </div>
                        <div className={style.shop_address}>
                            <p><span>Kiosk No.:</span> FF-01 , Phase 1, First Floor NorthWalk Mall Karachi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Our_outlets
