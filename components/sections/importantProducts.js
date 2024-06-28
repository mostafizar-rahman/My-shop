import React from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import HorizontalCard from '../ui/card/horizontalCard';

const ImportantProducts = ({ productData, title }) => {
    return (
        <div className='mx-auto max-w-7xl px-3 mt-10'>
            <div className="group/best">
                <h3 className='text-2xl font-bold  mb-3 border-b-[2px] inline-block border-b-orange-500'>{title}</h3>
                <Swiper
                    modules={[Navigation, Autoplay,]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={
                        {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    }
                    loop={true}
                >
                    {
                        productData.map(({ id, image, title, price, rating, color, sizes }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <HorizontalCard id={id} image={image} title={title} price={price} rating={rating} color={color} sizes={sizes} />
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
    )
}

export default ImportantProducts