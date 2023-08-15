import React from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/addCart/cartSlice";
import Link from "next/link";
import StarRating from "@/components/StarRating/StarRating";
import { addToWhiteList } from "@/redux/features/whiteList/whiteListSlice";
import toast from 'react-hot-toast';

const MainCard = ({ id, title, price, image, description, quantity }) => {
  const dispatch = useDispatch()
  return (
    <div
      className="relative  overflow-hidden bg-white p-4 group "
    >
      {quantity === 0 &&
        <div className="absolute top-5  -left-[1.8rem] flex justify-center bg-red-500 text-white text-sm px-7 -rotate-45 ">
          <p>Solut Out</p>
        </div>
      }

      <div className="bg-orange-500 w-full h-[200px]">
        <Image alt="image" src={image} width={200} height={100} className="h-[200px] object-contain mx-auto" />
      </div>
      <div className="mt-3">
        <h4 className="text-base font-medium">
          {title.length > 40 ? title.slice(0, 40) + '...' : title}
        </h4>
        <div className="flex items-center justify-between mt-2">
          <p className=" font-bold text-xl"> <span className="text-sm font-normal">$</span>{price}</p>
          <div>
            <StarRating star={3} />
          </div>
        </div>
        <p className="text-sm">{description}</p>
        <button onClick={() => (dispatch(addToCart({ id, title, price, image })), toast.success("Add To Cart Success"))} className="w-full h-10 bg-orange-500 text-white font-medium mt-4 hover:scale-90 duration-700 ease-in-out">Add To Cart</button>
      </div>
      <div className=" absolute top-1/3  right-0 invisible group-hover:visible group-hover:right-5 transition-all">
        <AiOutlineHeart onClick={() => (dispatch(addToWhiteList(id)), toast.success('Add To White List Success'))} className="text-3xl text-white cursor-pointer" />
        <Link href={`/productDetails/${id}`}>
          <AiOutlineEye className="text-3xl mt-2 text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default MainCard;
