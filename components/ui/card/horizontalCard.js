import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineEye,
} from "react-icons/ai";
import StarRating from "@/components/StarRating/StarRating";
import ModalWapper from "@/components/ModalWapper/ModalWapper";

const HorizontalCard = ({ id, image, title, price, rating, color, sizes }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="flex  bg-white rounded-md py-1 px-2 relative group mb-5">
        <div className=" rounded-md flex justify-center items-center bg-orange-500 w-[150px] ">
          <Image alt="image" src={image} width={100} height={100} className="mx-auto h-[100px] w-full object-contain" />
        </div>
        <div className="ml-3 ">
          <p className="font-medium text-sm ">

            {title.length > 30 ? title.slice(0, 30) + '...' : title}
          </p>
          <p className="text-xl font-semibold ">
            <small className="text-sm font-normal">$</small>
            {price}
          </p>
          <div>
            <StarRating rating={rating} />
          </div>

        </div>
        <div className="absolute left-0 invisible group-hover:visible  top-0 bg-white bg-opacity-70 w-0 h-full group-hover:w-full rounded-md flex justify-center items-center space-x-4 transition-all">
          <AiOutlineShoppingCart onClick={openModal} className="text-2xl cursor-pointer hover:text-orange-500" />
          <Link href={`productDetails/${id}`}>
            <AiOutlineEye className="text-2xl cursor-pointer hover:text-orange-500" />
          </Link>
        </div>
      </div>
      <ModalWapper id={id} image={image} price={price} title={title} color={color} sizes={sizes} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}  />
    </div>
  );
};

export default HorizontalCard;
