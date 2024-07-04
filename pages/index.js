import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import { productsData } from '@/utlits/productsData'

import AdsBanner from '@/components/AdsBanner/AdsBanner'
import Banner from '@/components/sections/banner';
import ImportantProducts from '@/components/sections/importantProducts';
import MainCard from '@/components/ui/card/mainCard';
import HomeCategoryCard from '@/components/sections/homeCategoryCard';
import PartnerLogo from '@/components/sections/partnerLogo';






const Home = ({ data }) => {
  const [screenSize, setScreenSize] = useState(1100)


  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }


    window.addEventListener('resize', handleResize);



    return () => window.removeEventListener('resize', handleResize);
  }, [])

  // -- Responsive swipper js
  let perView = 4
  if (screenSize <= 1100) {
    perView = 4
  }
  if (screenSize <= 1000) {
    perView = 3
  }
  if (screenSize <= 767) {
    perView = 2
  }
  if (screenSize <= 500) {
    perView = 1
  }

  let perView2 = 7
  if (screenSize <= 1100) {
    perView2 = 6
  }
  if (screenSize <= 1000) {
    perView2 = 5
  }
  if (screenSize <= 767) {
    perView2 = 3
  }
  if (screenSize <= 500) {
    perView2 = 2
  }



  return (
    <section>
      <Head>
        <title>ProductWorld.com</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
      </Head>
      <Banner />
      <ImportantProducts productData={data} title={"Top Selles"} />
      <HomeCategoryCard />
      <ImportantProducts productData={data} title={"Popular Products"} />

      {/* ------ Products */}
      <div className='mx-auto max-w-7xl px-3 mt-14'>
        <h3 className='text-2xl font-bold mb-3 border-b-[2px] inline-block border-b-orange-500'>For You</h3>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            data.slice(0, 10).map(({ id, title, image, price, quantity, rating, color, sizes }) => <MainCard key={id} id={id} title={title} image={image} price={price} quantity={quantity} rating={rating} color={color} sizes={sizes} />)
          }
        </div>
      </div>
      {/* ----- Ads Banner */}
      <AdsBanner />
      {/* ------ Products */}
      <div
        className='mx-auto max-w-7xl px-3 mt-10'>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            data.slice(0, 5).map(({ id, title, image, price, quantity, rating, color, sizes }) => <MainCard key={id} id={id} title={title} image={image} price={price} quantity={quantity} rating={rating} color={color} sizes={sizes} />)
          }
        </div>
      </div>
      {/* ------ Brands */}
     <PartnerLogo/>

    </section>
  )
}


export async function getServerSideProps() {

  const data = productsData

  return { props: { data } }
}


export default Home