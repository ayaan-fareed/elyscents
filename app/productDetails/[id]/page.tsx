'use client'
import Product_detail from '@/src/components/product_detail_page/product_detail'
import { useParams } from "next/navigation";

type props = {
    id: number,
}

const Page = () => {
    const params = useParams<{ id: string }>();
    return (
        <>
            <Product_detail id={params.id} />
        </>
    )
}

export default Page
