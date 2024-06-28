import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { productsData } from '@/utlits/productsData'

import Head from 'next/head'
import Sidebar from '@/components/Sidebar/Sidebar'
import MainCard from '@/components/ui/card/mainCard'

const Product = () => {
    const [productList, setProductList] = useState([])
    const [mainProductList, setMainProductList] = useState([])

    const { query } = useRouter()

    useEffect(() => {
        const router = query.id

        const product = productsData.filter(({ path }) => path === router)

        setProductList(product)
        setMainProductList(product)


    }, [query])


    return (
        <div className='mx-auto max-w-7xl px-3'>
            <Head>
                <title>ProductWorld.com-Product By Category</title>
                <link rel="icon" href="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
            </Head>
            <div className='grid lg:grid-cols-[18%_auto] md:grid-cols-[26%_auto] sm:grid-cols-1 gap-4 items-start'>
                {/* ----- Filtred List */}
                <div className='bg-white  pt-12 pb-10 px-3'>
                    <Sidebar mainProductList={mainProductList} setProductList={setProductList} />
                </div>
                {/* ---- Products */}
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  pt-12 pb-10'>
                    {productList.length && productList.map(({ id, title, price, image, rating }) => <MainCard key={id} id={id} title={title} price={price} image={image} rating={rating} />)}
                </div>
            </div>
        </div>
    )
}


export default Product