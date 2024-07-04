import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { partnerData } from '@/utlits/fackData/partnerData';

const PartnerLogo = () => {
    return (
        <div className=' brands mx-auto max-w-7xl px-3 mt-28 mb-10'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={5}
                autoplay={{ delay: 1000 }}
                loop={true}
            >
                {
                    partnerData.map(({ id, src }) => <SwiperSlide key={id}><Image alt='image' src={src} width={100} height={100} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default PartnerLogo