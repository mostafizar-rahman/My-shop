import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import StarRating from "@/components/StarRating/StarRating";
import { addToWhiteList } from "@/redux/features/whiteList/whiteListSlice";
import ModalWapper from "@/components/ModalWapper/ModalWapper";



const MainCard = ({ id, title, price, image, description, quantity, rating, color, sizes }) => {
  const dispatch = useDispatch()

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
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
        <div className="mt-3 ">
          <Link href={`/product-details/${id}`} className="text-base font-medium hover:text-orange-500 transition-all duration-500">
            {title.length > 40 ? title.slice(0, 40) + '...' : title}
          </Link>
          <div className="flex items-center justify-between mt-2">
            <p className=" font-bold text-xl"> <span className="text-sm font-normal">$</span>{price}</p>
            <div>
              <StarRating star={rating} />
            </div>
          </div>
          <p className="text-sm">{description}</p>
        </div>
        <button onClick={openModal} className="w-full h-10 bg-orange-500 text-white font-medium mt-4 hover:scale-95 duration-700 ease-in-out  left-0">Add To Cart</button>
        <div className=" absolute top-1/3  right-0 invisible group-hover:visible group-hover:right-5 transition-all">
          <AiOutlineHeart onClick={() => (dispatch(addToWhiteList(id)), toast.success('Add To White List Success'))} className="text-3xl text-white cursor-pointer" />
          <Link href={`/product-details/${id}`}>
            <AiOutlineEye className="text-3xl mt-2 text-white cursor-pointer" />
          </Link>
        </div>
        <ModalWapper modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id={id} title={title} price={price} image={image} color={color} sizes={sizes} />
      </div>
    </>
  );
};

export default MainCard;
