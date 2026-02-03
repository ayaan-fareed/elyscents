'use client'
import { useState, useEffect } from 'react'
import style from './product_detail.module.scss'
import { FaStar } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaCircleDot, FaChevronUp } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { products } from '@/src/data/products';

type props = {
    id: string,
}

const Product_detail = ({ id }: props) => {
    const [open, setOpen] = useState(false)
    const [ayaan, setAyaan] = useState(false)
    const [productData, setProductData] = useState<any>({})

    useEffect(() => {
        const foundProduct = products.find(
            (item) => item.id === Number(id)
        );

        if (foundProduct) {
            setProductData(foundProduct);
        }
    }, [id]);

    return (
        <>
            <div className={style.main_cont}>
                <div className={style.conatiner}>
                    <div className={style.image_container}>
                        <img src={productData.big_img} alt="img" className={style.mn_image} />
                    </div>
                    <div className={style.text_cont}>
                        <h1>{productData.name}</h1>
                        <div className={style.star_cont}>
                            <span className={style.star_icon}>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <span>5 reviews</span>
                        </div>
                        <div className={style.pricing_sec}>
                            <p className={style.orignal_price}>Rs.{productData.orignal_price}</p>
                            <p>Rs.{productData.dicounted_price}</p>
                            <span>Save {productData.orignal_price - productData.dicounted_price}</span>
                        </div>
                        <div className={style.free_deliver_sec}>
                            🛍️ <strong>Buy Any 2 Perfumes</strong> & <strong>FREE Delivery</strong> Get — Automatically Applied at Checkout.
                        </div>


                        <div className={style.shiping_details}>
                            <span><CiGift />FREE gift packing with every order</span>
                            <span><TbWorld />14 Days easy return</span>
                            <span className={style.green_dot}><FaCircleDot />In stock, ready to ship</span>
                        </div>
                        <div className={style.perfumes_options}>
                            <label htmlFor="perfume1" className={style.lable_txt}>PERFUME 1</label>
                            <select id="perfume1">
                                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                                <option>ROYAL OUD</option>
                                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                                <option>EXOTIC PULSE</option>
                                <option>APEX INSPIRED BY DUNHILL</option>
                            </select>
                            <label htmlFor="perfume2" className={style.lable_txt}>PERFUME 2</label>
                            <select id="perfume1">
                                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                                <option>ROYAL OUD</option>
                                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                                <option>EXOTIC PULSE</option>
                                <option>APEX INSPIRED BY DUNHILL</option>
                            </select>
                            <label htmlFor="perfume3" className={style.lable_txt}>PERFUME 3</label>
                            <select id="perfume1">
                                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                                <option>ROYAL OUD</option>
                                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                                <option>EXOTIC PULSE</option>
                                <option>APEX INSPIRED BY DUNHILL</option>
                            </select>
                            <label htmlFor="perfume4" className={style.lable_txt}>PERFUME 4</label>
                            <select id="perfume1">
                                <option>ROYAL OUD</option>
                                <option>WILD ESSENCE - INSPIRED BY DIOR</option>
                                <option>SALSA SPIRIT - INPIRED BY CREED</option>
                                <option>ZARAK INSPIRED BY AZZARO WANTED</option>
                                <option>PEAK BREEZE - INSPIRED BY SILVER</option>
                                <option>GREEN ELIXIR - INSPIRED BY ISSEY MIYAKE</option>
                                <option>EXOTIC PULSE</option>
                                <option>APEX INSPIRED BY DUNHILL</option>
                            </select>
                        </div>
                        <div className={style.add_btns}>
                            <button className={style.add_to_cart_btn}>ADD TO CART</button>
                            <button className={style.buy_now_btn}>BUY IT NOW</button>
                        </div>
                        <div className={style.why_thiss__sec}>
                            <p>Why settle for one when you can have four?</p>
                            <p>Get any 4 perfumes for just Rs. 5599/- A deal too good to miss!</p>
                            <p>Whether you love bold, fresh, or timeless scents, this bundle lets you mix and match your favorites without breaking the bank.</p>
                        </div>

                        <div className={style.information_cont}>

                            <h2>Confidence, compliments & class — all in one bundle.</h2>

                            <div className={`${style.accordion_item} ${open ? style.active : ''}`}>
                                <button className={style.accordion_title}
                                    onClick={() => setOpen(!open)} aria-expanded={open}>
                                    <span className={style.title}>SHIPPING INFORMATION</span>
                                    <span className={`${style.icon} ${open ? style.rotate : ''}`}>
                                        <FaChevronUp />
                                    </span>
                                </button>

                                <div className={`${style.accordion_content} ${open ? style.show : ''}`}>
                                    <ul>
                                        <li>
                                            <strong>What are the Delivery charges?</strong>
                                            <p>The delivery charges are Rs 200</p>
                                        </li>
                                        <li>
                                            <strong>When will my order be delivered?</strong>
                                            <p>For Karachi - 2–3 working days.</p>
                                            <p>Outside Karachi - 3–5 working days.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`${style.accordion_item} ${ayaan ? style.active : ''}`}>
                                <button className={style.accordion_title}
                                    onClick={() => setAyaan(!ayaan)} aria-expanded={ayaan}>
                                    <span className={style.title}>ASK A QUESTION</span>
                                    <span className={`${style.icon} ${ayaan ? style.rotate : ''}`}>
                                        <FaChevronUp />
                                    </span>
                                </button>

                                <div className={`${style.form_wrapper} ${ayaan ? style.show : ''}`}>
                                    <form className={style.user_detail_form}>
                                        <div className={style.row}>
                                            <div className={style.field}>
                                                <label>NAME</label>
                                                <input type="text" />
                                            </div>

                                            <div className={style.field}>
                                                <label>EMAIL</label>
                                                <input type="email" />
                                            </div>
                                        </div>

                                        <div className={style.field}>
                                            <label>MESSAGE</label>
                                            <textarea rows={6}></textarea>
                                        </div>

                                        <button className={style.submit_btn}>SEND</button>

                                        <p className={style.captcha}>
                                            This site is protected by hCaptcha and the hCaptcha{" "}
                                            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
                                        </p>
                                    </form>
                                </div>
                            </div>

                            <div className={style.social_share}>
                                <a href="https://www.facebook.com/sharer.php?u=https://elyscents.pk/products/4x-perfume-bundle" className={style.item}>
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" />
                                    <span>Share</span>
                                </a>

                                <a href="https://twitter.com/share?text=4x%20Perfume%20Bundle&url=https://elyscents.pk/products/4x-perfume-bundle" className={style.item}>
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" />
                                    <span>Tweet</span>
                                </a>

                                <a href="https://pinterest.com/pin/create/button/?url=https://elyscents.pk/products/4x-perfume-bundle&media=//elyscents.pk/cdn/shop/files/4_perfume_new_1_1024x1024.jpg?v=1764960763&description=4x%20Perfume%20Bundle" className={style.item}>
                                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg" alt="Pinterest" />
                                    <span>Pin it</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Product_detail
