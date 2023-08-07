import Image from "next/image";
import React from "react";

import {
  AiOutlineShoppingCart,
  AiOutlineEye,
  AiFillStar,
} from "react-icons/ai";

const VerticalCard = ({ image, name, price, rating }) => {
  return (
    <div className="  bg-white rounded-md py-1 px-2 relative group mb-5 lg:basis-[31%] basis-1/2">
      <div className="bg-orange-500 rounded-md">
        <Image
          alt="image"
          src={image}
          width={150}
          height={100}
          className="mx-auto h-[150px] object-contain"
        />
      </div>
      <div className="mt-4">
        <p className="font-medium text-sm">{name}</p>
        <div className="flex justify-between items-center">
          <p className=" text-xl font-semibold">
            <small className="text-sm font-normal">$</small>
            {price}
          </p>
          <div className="flex">
            <AiFillStar className="text-orange-500 text-sm" />
            <AiFillStar className="text-orange-500 text-sm" />
            <AiFillStar className="text-orange-500 text-sm" />
            <AiFillStar className="text-orange-500 text-sm" />
            <AiFillStar className="text-orange-500 text-sm" />
          </div>

        </div>
        <p className="text-[13px] mt-2 text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="absolute left-0 invisible group-hover:visible  top-0 bg-white bg-opacity-70 w-0 h-full group-hover:w-full rounded-md flex justify-center items-center space-x-4 transition-all">
        <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-orange-500" />
        <AiOutlineEye className="text-2xl cursor-pointer hover:text-orange-500" />
      </div>
    </div>
  );
};

export default VerticalCard;
