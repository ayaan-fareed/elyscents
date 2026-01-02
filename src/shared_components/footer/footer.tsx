import React from 'react'
import style from './footer.module.scss'
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className={style.footer_prnt}>
        <div className={style.footer_container}>
          <div className={style.ft_image}>
            <Link href='/'>
              <img src="https://elyscents.pk/cdn/shop/files/logo_size.png?v=1703577106&width=277" alt="img" className={style.ft_logo_img} />
            </Link>
          </div>
          <div className={style.our_policys}>
            <ul>
              <li><a href="#">Return & Exchange Policy</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className={style.sign_up_sec}>
            <h2>SIGN UP AND SAVE</h2>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className={style.input_bar}>
              <input type="text" placeholder='Enter your email' />
              <div className={style.email_icon}>
                <CiMail />
              </div>
            </div>
            <div className={style.social_icon}>
              <Link target="_blank" href='https://www.instagram.com/elyscents.pk/'> <FaInstagram /></Link>
              <Link target="_blank" href='https://www.facebook.com/elyscents1/'> <FaFacebook /></Link>
              <Link target="_blank" href='https://www.youtube.com/@elyscents'>  <GrYoutube /></Link>
              <Link target="_blank" href='https://www.tiktok.com/@elyscents'> <FaTiktok /></Link>
            </div>
          </div>
          <div className={style.talk_to_us}>
            <h3>TALK TO US</h3>
            <p className={style.chat_us}>Chat With Us</p>
            <p>Monday - Saturday: 10am-10pm PST</p>
            <p>Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi </p>
            <p>Address: Shop no A219, 2nd Floor At Ocean Mall</p>
            <p>Address: Shop no A219, 2nd Floor At Ocean Mall</p>
            <p>Address : Kiosk No.: FF-01 , Phase 1, First Floor NorthWalk Mall Karachi</p>
            <p>Address : Kiosk No.: FF-01 , Phase 1, First Floor NorthWalk Mall Karachi</p>
            <p>UAE Address: 248,0,LOOTAH BLDG 0 Diera DXB</p>
            <p className={style.contact_num}>WhatsApp us: 03268124613 <br />
              Phone: 03012546333</p>
            <p>Customer Support: helloelyscents@gmail.com</p>
          </div>
        </div>
        <div className={style.copy_right}>
          <p>© 2025 Elyscents</p>
          <Link target='_blank' href='https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore'>
          <p>Powered by Shopify</p></Link>
        </div>

      </div>
    </>
  )
}

export default Footer
