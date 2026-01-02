import React from 'react'
import style from './contact.module.scss'

const Contact = () => {
    return (
        <>
            <div className={style.main_container}>
                <div className={style.main_txt}>
                    <h2>CONTACT US</h2>
                </div>

                <div className={style.address_container}>
                    <p>Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi </p>
                    <p>WhatsApp Us: +92 3012546333</p>
                    <p>Customer Support: helloelyscents@gmail.com</p>
                    <p>UAE address: 248,0,LOOTAH BLDG 0 Diera DXB</p>
                </div>

                <div className={style.sendamessage_container}>
                    <div className={style.sub_heading}>
                        <h2>SEND US A MESSAGE OR EMAIL US AT HELLOELYSCENTS@GMAIL.COM</h2>
                    </div>

                    <div className={style.cus_info_sec}>
                        <div className={style.cus_detail}>
                            <div className={style.enter_name}>
                                <label htmlFor="">NAME</label>
                                <input type="text" />
                            </div>

                            <div className={style.enter_name}>
                                <label htmlFor="">EMAIL</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className={style.lable_tag}>MESSAGE</label >
                            <textarea name="message" id="" className={style.text_area_sec}></textarea>
                        </div>
                    </div>
                </div>
                <div className={style.send_container}>
                    <button>SEND</button>
                    <p>This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.</p>
                </div>

            </div>
        </>
    )
}

export default Contact
