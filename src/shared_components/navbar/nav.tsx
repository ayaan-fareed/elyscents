'use client'
import React from 'react'
import style from '@/src/shared_components/navbar/nav.module.scss'
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const Nav = () => {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (value: boolean) => { setOpen(value); };
  const router = useRouter();

  const menuItems = [
    { text: "HOME", path: "/" },
    { text: "ALL PERFUMES", path: "/perfumes" },
    { text: "CRAZY DEALS", path: "/crazy_deals" },
    { text: "ABOUT US", path: "/about_us" },
    { text: "CONTACT US", path: "/contact_us" },
  ];

  const [cartOpen, setCartOpen] = React.useState(false);

  const toggleCartDrawer = (value: boolean) => {
    setCartOpen(value);
  };
  
  return (
    <>
      <div className={style.shipping}>
        <p>BUY ANY TWO PERFUMES & GET FREE SHIPPING</p>
      </div>

      <nav className={style.nav_bar}>

        <div className={style.main_bar}>

          <div
            className={style.menu_icon}
            onClick={() => toggleDrawer(true)}>
            <FaBars />
          </div>

          <div className={style.nav_left}>
            <CiSearch />
          </div>

          <div className={style.nav_center}>
            <Link href='/'><div className={style.logo_img}></div></Link>
          </div>

          <div className={style.nav_rght_main}>
            <div className={style.nav_right_srchbar}>
              <CiSearch />
            </div>

            <div className={style.nav_right_person} onClick={() => router.push('/login')}>
              <GoPerson />
            </div>

            <div className={style.nav_right} onClick={() => toggleCartDrawer(true)} >
              <IoBagOutline />
            </div>
          </div>
        </div>

        <div>
          <ul className={style.nav_pages}>

            <li className={style.nav_links}>
              <Link href="/">HOME</Link>
            </li>

            <li className={style.nav_links}>
              <div className={style.dropdown}>

                <Link href="/perfumes" className={style.dropdown_toggle}>
                  ALL PERFUMES
                </Link>

                <ul className={style.dropdown_menu}>
                  <li><Link href="/forHim">Men</Link></li>
                  <li><Link href="/forHer">Women</Link></li>
                  <li><Link href="/oudCollection">Unisex</Link></li>
                  <li><Link href="/oudCollection">Oud Collection</Link></li>
                  <li><Link href="/best_sellers">Best Seller Perfumes</Link></li>
                  <li><Link href="/forHim">New Arrivals</Link></li>
                  <li><Link href="/crazy_deals">Crazy Deals</Link></li>
                </ul>
              </div>
            </li>

            <li className={style.nav_links}>
              <Link href="/crazy_deals">CRAZY DEALS</Link>
            </li>

            <li className={style.nav_links}>
              <Link href="/about_us">ABOUT US</Link>
            </li>

            <li className={style.nav_links}>
              <Link href="/contact_us">CONTACT US</Link>
            </li>

          </ul>
        </div>
      </nav>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#000',
            width: 320,
          }
        }}>

        <div className={style.close_icon}>
          <IoClose className={style.close_icon_mn}
            onClick={() => toggleDrawer(false)} />
        </div>

        {menuItems.map((item) => (
          <div key={item.text}>
            <div className={style.drawer_text}
              onClick={() => {
                toggleDrawer(false);
                router.push(item.path);
              }}>
              {item.text}
            </div>
            <Box sx={{ borderBottom: '1px solid #e5e5e5' }} />
          </div>
        ))}

        <div className={style.login_sec}
          onClick={() => {
            toggleDrawer(false);
            router.push("/login");
          }}>
          <p>Log in</p>
        </div>

        <div className={style.social_icon_cont}>
          {[
            <a href="https://www.instagram.com/elyscents.pk/" target='/'>< FaInstagram /></a>,
            <a href="https://www.facebook.com/profile.php?id=61556004412531" target='/'>< FaFacebookF /></a>,
            <a href="https://www.youtube.com/@elyscents" target='/'>< FaYoutube /></a>,
            <a href="https://www.tiktok.com/@elyscents" target='/'>< FaTiktok /></a>,
          ].map((icon, i) => (
            <div className={style.icons_style} key={i}>
              {icon}
            </div>
          ))}
        </div>
      </SwipeableDrawer>

      <SwipeableDrawer
        anchor="right"
        open={cartOpen}
        onClose={() => toggleCartDrawer(false)}
        onOpen={() => toggleCartDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#000',
            width: { xs: '80%', sm: 380 },
          }
        }}>

        <div className={style.cart_header}>
          <h2>CART</h2>

          <IoClose
            className={style.close_icon2}
            onClick={() => toggleCartDrawer(false)}
          />
        </div>


        <div className={style.cart_item}>
          <img
            src="https://elyscents.pk/cdn/shop/files/berry_grace.jpg?v=1760522656&width=540"
            alt="product"
            className={style.product_img}
          />

          <div className={style.product_details}>
            <h4>Berry Grace Inspired By Burbury Her</h4>
            <p><strong>Size:</strong> 50 ML</p>

            <div className={style.qty_price}>
              <div className={style.qty_box}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <span className={style.price}>Rs.1,899.00</span>
            </div>
          </div>
        </div>

        <div className={style.cart_footer}>
          <div className={style.subtotal}>
            <span>SUBTOTAL</span>
            <span>Rs.1,899.00</span>
          </div>

          <p className={style.note}>
            Shipping, taxes, and discount codes calculated at checkout.
          </p>

          <button className={style.checkout_btn}>
            CHECK OUT
          </button>
        </div>
      </SwipeableDrawer>

    </>
  )
}

export default Nav
