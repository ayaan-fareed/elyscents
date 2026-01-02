'use client'
import React from 'react'
import style from './login.module.scss'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <div>
                <div className={style.login_card}>
                    <div className={style.image}>
                        <Link href='/'><img src="https://cdn.shopify.com/s/files/1/0569/6185/9665/files/logo_size_ef877e92-6cbf-4198-85b7-7fa0bf6cc89c_200x60@2x.png?v=1703761544.webp" alt="" className={style.elyscents_logo} /></Link>
                    </div>
                    <div className={style.signin_txt}>
                        <h2>Sign in</h2>
                        <p>Sign in or create an account</p>
                    </div>
                    <div className={style.sign_btn}>
                        <button className={style.shop_btn}>Sign in with shop</button>
                    </div>
                    <div className={style.divider}>
                        <div className={style.line}></div>
                        <div className={style.text}>or</div>
                        <div className={style.line}></div>
                    </div>
                    <div className={style.mail_box}>
                        <input type="text" placeholder='Email' className={style.input_bar} />
                        <button className={style.continue_btn}>Continue</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login
