import React, { useEffect, useState } from 'react'
import Banner from '@/components/Banner/Banner'
import { categoryListData } from '@/utlits/categoryListData'
import CategorieCard from '@/components/CategorieCard/CategorieCard'
import { productsData } from '@/utlits/productsData'
import VerticalCard from '@/components/Card/VerticalCard/VerticalCard'
import HorizontalCard from '@/components/Card/HorizontalCard/HorizontalCard'
import { featuredData } from '@/utlits/featuredData'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import MainCard from '@/components/Card/MainCard/MainCard'
import AdsBanner from '@/components/AdsBanner/AdsBanner'
import { useDispatch } from 'react-redux'

const Home = ({ data }) => {
  const [isActiveSlider, setIsActiveSlider] = useState(0);
  const [isTrendingActiveSlider, setIsTrendingActiveSlider] = useState(0)


  const handleNextItem = () => {
    if (isActiveSlider <= 0) {
      setIsActiveSlider(2);
    } else {
      setIsActiveSlider(isActiveSlider - 1);
    }

  };
  const handlePreviwesItem = () => {
    if (isActiveSlider >= 2) {
      setIsActiveSlider(0);
    } else {
      setIsActiveSlider(isActiveSlider + 1);
    }

  };

  const handleTrendingNextItem = () => {
    if (isTrendingActiveSlider <= 0) {
      setIsTrendingActiveSlider(2)
    } else {
      setIsTrendingActiveSlider(isTrendingActiveSlider - 1)
    }

  }
  const handleTrendingPreviwesItem = () => {
    if (isTrendingActiveSlider >= 2) {
      setIsTrendingActiveSlider(0)
    } else {
      setIsTrendingActiveSlider(isTrendingActiveSlider + 1)
    }
  }
  return (
    <section>
      <Banner />
      {/* ------ Featured Products */}
      <div className='mx-auto max-w-7xl px-3 mt-28'>
        <div className='grid lg:grid-cols-[20%_auto_20%] md:grid-cols-[30%_auto] gap-8'>
          <div className='w-full min-h-[500px] sm:min-h-[400px] md:min-h-[600px] relative'>
            <div className='flex w-full h-full relative overflow-x-hidden mt-10'>
              <div className={`w-full flex flex-wrap justify-between gap-3 md:gap-0 md:block absolute transition-all ${isActiveSlider === 0 ? 'left-0' : '-left-full'}`}>
                {featuredData.slice(0, 4).map(({ id, image, name, price, rating }) => <HorizontalCard key={id} image={image} name={name} price={price} rating={rating} />)}
              </div>
              <div className={`w-full flex flex-wrap justify-between gap-3 md:gap-0 md:block absolute transition-all ${isActiveSlider === 1 ? 'left-0' : '-left-full'}`}>
                {featuredData.slice(4, 8).map(({ id, image, name, price, rating }) => <HorizontalCard key={id} image={image} name={name} price={price} rating={rating} />)}
              </div>
            </div>
            <div className="absolute top-0 flex justify-between w-full">
              <h4 className='text-orange-500 font-semibold text-xl'>Best selles</h4>
              <div className='flex gap-4'>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={() => handleNextItem('bestSelles')}>
                  <AiOutlineLeft />
                </button>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={() => handlePreviwesItem('bestSelles')}>
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
          {/* Trend */}
          <div className=' w-full h-[600px] relative'>
            <div className={`relative h-[600px] mt-0 overflow-y-hidden overflow-x-hidden`}>
              <div className={`flex flex-wrap justify-between w-full mt-10 absolute  ${isTrendingActiveSlider === 0 ? 'top-0' : '-top-full'} `}>
                {featuredData.slice(0, 6).map(({ id, image, name, price, rating }) => <VerticalCard key={id} name={name} price={price} image={image} rating={rating} />)}
              </div>
              <div className={`flex flex-wrap justify-between w-full mt-10 absolute  ${isTrendingActiveSlider === 1 ? 'top-0' : '-top-full'} `}>
                {featuredData.slice(6, 12).map(({ id, image, name, price, rating }) => <VerticalCard key={id} name={name} price={price} image={image} rating={rating} />)}
              </div>
            </div>
            <div className="absolute top-0 flex justify-between w-full">
              <h4 className='text-orange-500 font-semibold text-xl'>Trending</h4>
              <div className='flex gap-4'>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={handleTrendingNextItem}>
                  <AiOutlineLeft />
                </button>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={handleTrendingPreviwesItem}>
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>

          {/* Hot Deal */}
          <div className='w-full min-h-[500px] sm:min-h-[400px] md:min-h-[600px] relative'>
            <div className='flex w-full h-full relative overflow-x-hidden mt-10'>
              <div className={`w-full flex flex-wrap justify-between gap-3 md:gap-0 md:block absolute transition-all ${isActiveSlider === 0 ? 'left-0' : '-left-full'}`}>
                {featuredData.slice(0, 4).map(({ id, image, name, price, rating }) => <HorizontalCard key={id} image={image} name={name} price={price} rating={rating} />)}
              </div>
              <div className={`w-full flex flex-wrap justify-between gap-3 md:gap-0 md:block absolute transition-all ${isActiveSlider === 1 ? 'left-0' : '-left-full'}`}>
                {featuredData.slice(4, 8).map(({ id, image, name, price, rating }) => <HorizontalCard key={id} image={image} name={name} price={price} rating={rating} />)}
              </div>
            </div>
            <div className="absolute top-0 flex justify-between w-full">
              <h4 className='text-orange-500 font-semibold text-xl'>Hot Deals</h4>
              <div className='flex gap-4'>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={() => handleNextItem('hotDeals')}>
                  <AiOutlineLeft />
                </button>
                <button className='bg-white w-7 h-7 rounded-full flex justify-center items-center' onClick={() => handlePreviwesItem('hotDeals')}>
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ------ Category  */}
      <div className='mx-auto max-w-7xl px-3 mt-28'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            categoryListData.map(({ id, category, subCategory }) => <CategorieCard id={id} category={category} subCategory={subCategory} />)
          }
        </div>
      </div>
      {/* ------ Products */}
      <div className='mx-auto max-w-7xl px-3 mt-28'>
        <h3 className='text-3xl font-bold text-white mb-4'>For You</h3>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            data.slice(0, 10).map(({ id, title, image, price, quantity }) => <MainCard key={id} id={id} title={title} image={image} price={price} />)
          }
        </div>
      </div>
      {/* ----- Ads Banner */}
      <AdsBanner />
      {/* ------ Products */}
      <div className='mx-auto max-w-7xl px-3 mt-10'>
        <h3 className='text-3xl font-bold text-white mb-4'>For You</h3>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
          {
            data.slice(0, 5).map(({ id, title, image, price, quantity }) => <MainCard key={id} id={id} title={title} image={image} price={price} />)
          }
        </div>
      </div>
    </section>
  )
}


export async function getServerSideProps() {

  const data = productsData

  return { props: { data } }
}


export default Home