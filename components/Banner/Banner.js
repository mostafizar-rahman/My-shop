import Image from "next/image";
import Home1 from "../../assets/images/home1.png";
import Home2 from "../../assets/images/home2.webp";
import Home3 from "../../assets/images/home3.png";
import Home4 from "../../assets/images/home4.png";
import Home5 from "../../assets/images/home5.jpg";
import Home6 from "../../assets/images/home6.jpg";
import { AiFillCalendar } from "react-icons/ai";
import { motion } from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Banner = () => {
  const cardVariants = {
    offscreen: {
      y: 700
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,

      }
    }
  };
 
  return (
    <section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className=" grid lg:grid-cols-[auto_50%_20%] md:grid-cols-[auto_70%] grid-cols-1 md:gap-x-5 gap-x-0 "
    >
      {/* --------- Left Side */}
      <div
        variants={cardVariants}
        className="lg:row-span-2 hidden md:block lg:h-[700px] h-[600px] relative">
        <Image
          alt="image"
          src={Home1}
          width={400}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-30 text-slate-100 p-3 w-full h-full flex items-centr">
          <h3 className="lg:text-3xl text-xl font-semibold text-slate-100 rotate-90 font-norican absolute top-1/2 translate-y-1/1 right-0 ">
            Hooded
          </h3>
        </div>
      </div>
      {/* --------- Center */}
      <div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={
            {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          }
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative h-[600px] w-full">
              <Image
                alt="image"
                src={Home2}
                width={600}
                height={600}
                className="w-full h-[600px]"
              />
              <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-30 text-slate-100 p-3 w-full h-full flex items-end">
                <div className="max-w-xs">
                  <h3 className="lg:text-5xl text-xl font-semibold font-norican">Sofa Set</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                    autem quis? Ullam cum aut temporibus?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[600px] w-full">
              <Image
                alt="image"
                src={Home5}
                width={600}
                height={600}
                className="w-full h-[600px]"
              />
              <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-30 text-slate-100 p-3 w-full h-full flex items-end">
                <div className="max-w-xs">
                  <h3 className="lg:text-5xl text-xl font-semibold font-norican">Sofa Set</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                    autem quis? Ullam cum aut temporibus?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[600px] w-full">
              <Image
                alt="image"
                src={Home6}
                width={600}
                height={600}
                className="w-full h-[600px]"
              />
              <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-30 text-slate-100 p-3 w-full h-full flex items-end">
                <div className="max-w-xs">
                  <h3 className="lg:text-5xl text-xl font-semibold font-norican">Sofa Set</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                    autem quis? Ullam cum aut temporibus?
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-next">
            <BiRightArrow className="text-white " />
          </div>
          <div className="swiper-button-prev">
            <BiLeftArrow className="text-white " />
          </div>
        </Swiper>
      </div>
      {/* -------- Right Side */}
      <div
        variants={cardVariants}
        className="hidden lg:block"
      >
        <div className="relative h-[300px] w-full">
          <Image
            alt="image"
            src={Home3}
            width={300}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="max-w-sm absolute bottom-0 left-0 z-10 bg-black bg-opacity-30 w-full h-full p-3 flex items-end">
            <h3 className="lg:text-3xl text-xl font-semibold text-slate-100 font-norican">
              Hooded
            </h3>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            alt="image"
            src={Home4}
            width={300}
            height={300}
            className="w-full h-[300px] object-cover"
          />
          <div className="max-w-sm absolute bottom-0 left-0 z-10 bg-black bg-opacity-30 w-full h-full p-3 flex items-end">
            <h3 className="lg:text-3xl text-xl font-semibold text-slate-100 font-norican">
              T-Shart
            </h3>
          </div>
        </div>
      </div>
      {/* ------- our offer */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 col-span-2 px-3 lg:px-0  lg:gap-0 gap-5">
        <div className="flex justify-center sm:justify-start sm:flex-row flex-col text-center sm:text-left items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none px-3 ">
          <AiFillCalendar className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">SUPPORT 24/7</h2>
            <i className="text-sm">We support online 24hrs</i>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start sm:flex-row flex-col text-center sm:text-left items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none px-3 ">
          <FiRefreshCcw className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">FREE RETURN</h2>
            <i className="text-sm">30 days money back guarantee</i>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start sm:flex-row flex-col text-center sm:text-left items-center space-x-5 bg-slate-100 h-[100px] mb-3 rounded-md lg:rounded-none px-3 ">
          <FaTelegramPlane className="text-3xl text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold">FREE SHIPPING</h2>
            <i className="text-sm">Free shipping on all order</i>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Banner;
