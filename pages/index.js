import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import { categoryListData } from '@/utlits/categoryListData'
import CategorieCard from '@/components/CategorieCard/CategorieCard'
import { productsData } from '@/utlits/productsData'
import HorizontalCard from '@/components/Card/HorizontalCard/HorizontalCard'
import MainCard from '@/components/Card/MainCard/MainCard'
import AdsBanner from '@/components/AdsBanner/AdsBanner'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';



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
        <title>MySHOP.com</title>
        <link rel="icon" href="https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_640.png" />
      </Head>
      {/* ----- Banner */}
      <Banner />
      {/* ------ Top Selles Products */}
      <div
        className='mx-auto max-w-7xl px-3 mt-10  '
      >
        <div className="group/best">
          <h3 className='text-2xl font-bold  mb-3 border-b-[2px] inline-block border-b-orange-500'>Top Selles</h3>
          <Swiper

            modules={[Navigation, Autoplay,]}
            spaceBetween={20}
            slidesPerView={perView}
            navigation={
              {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            }
            loop={true}
          >
            {
              data.map(({ id, image, title, price, rating }) => {
                return (
                  <SwiperSlide key={id}>
                    <HorizontalCard id={id} image={image} title={title} price={price} rating={rating} />
                  </SwiperSlide>
                )
              })
            }

            <div className='invisible group-hover/best:visible'>
              <div className="swiper-button-next">
                <BiRightArrow className="text-white " />
              </div>
              <div className="swiper-button-prev">
                <BiLeftArrow className="text-white " />
              </div>
            </div>

          </Swiper>

        </div>
      </div>
      {/* ------ Category  */}
      <div
        className='mx-auto max-w-7xl px-3 mt-14'
      >
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            categoryListData.slice(0, 3).map(({ id, category, subCategory }) => <CategorieCard key={id} id={id} category={category} subCategory={subCategory} />)
          }
        </div>
      </div>
      {/* ------ Popular Products */}
      <div
        className='mx-auto max-w-7xl px-3 mt-14'
      >
        <div className="group/best">
          <h3 className='text-2xl font-bold mb-3 border-b-[2px] inline-block border-b-orange-500'>Popular</h3>
          <Swiper

            modules={[Navigation, Autoplay,]}
            spaceBetween={20}
            slidesPerView={perView}
            navigation={
              {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            }
            loop={true}
          >
            {
              data.map(({ id, image, title, price, rating }) => {
                return (
                  <SwiperSlide key={id}>
                    <HorizontalCard id={id} image={image} title={title} price={price} rating={rating} />
                  </SwiperSlide>
                )
              })
            }

            <div className='invisible group-hover/best:visible'>
              <div className="swiper-button-next">
                <BiRightArrow className="text-white " />
              </div>
              <div className="swiper-button-prev">
                <BiLeftArrow className="text-white " />
              </div>
            </div>

          </Swiper>

        </div>
      </div>
      {/* ------ Products */}
      <div
        className='mx-auto max-w-7xl px-3 mt-14'
      >
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
      <div className=' brands mx-auto max-w-7xl px-3 mt-28 mb-10'>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={perView2}
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/2.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/3.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/4.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/5.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image alt='image' src={require("../assets/brands/6.png")} width={100} height={100} />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

    </section>
  )
}


export async function getServerSideProps() {

  const data = productsData

  return { props: { data } }
}


export default Home