import React from 'react'
import Nav from '@/src/shared_components/navbar/nav'
import Image from '@/src/components/mn_image/image'
import crazy_deal from '@/src/components/crazy_deals/crazy_deal'
import Crazy_deal from '@/src/components/crazy_deals/crazy_deal'
import Scents_deal from '@/src/components/scents_image/scents_deal'
import Best_seller from '@/src/components/best_seller_sec/best_seller'
import Perfect_duo_image from '@/src/components/theperfect_duo_image/perfect_duo_image'
import For_her_sec from '@/src/components/perfume_for_her/for_her_sec'
import For_him from '@/src/components/perfume_for_him/for_him'
import Oud_collection from '@/src/components/oud_collection_sec/oud_collection'
import Our_collection_img from '@/src/components/our_product_collection_image/our_collection_img'
import Customer_saying from '@/src/components/customer_says/customer_saying'
import Our_outlets from '@/src/components/our_retail_outlets/our_outlets'
import Footer from '@/src/shared_components/footer/footer'

const page = () => {
  return (
    <div>
      <Image/>
      <Crazy_deal/>
      <Scents_deal/>
      <Best_seller/>
      <Perfect_duo_image/>
      <For_her_sec/>
      <For_him/>
      <Oud_collection/>
      <Our_collection_img/>
      <Customer_saying/> 
      <Our_outlets/>
    </div>
    
  )
}

export default page