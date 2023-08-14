import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { productsData } from "@/utlits/productsData";
import { addToCart } from "@/redux/features/addCart/cartSlice";
// import toast from 'react-hot-toast';

const WhiteList = ({ whiteList, setWhiteList }) => {
  const whiteListItem = useSelector((state) => state.whiteList.whitList)
  const [whiteListProducts, setwhiteListProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    const products = productsData.filter((product) => {
      return (
        whiteListItem.some(({ id }) => {
          return id === product.id
        })
      )

    })
    setwhiteListProducts(products)
  }, [whiteListItem])

  return (
    <aside
      className={`fixed top-0 bottom-0 overflow-y-auto ${whiteList ? "right-0" : "-right-full"
        } duration-700 max-w-md w-full bg-[#13263d] px-5 py-[60px] border-l border-[#516782] z-50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
    >
      <div>
        <FaTimes
          onClick={() => setWhiteList(false)}
          className="text-white text-xl cursor-pointer absolute top-5 left-5 hover:text-red-600 transition"
        />
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <div class="text-center">
            <h1 class="text-xl font-bold text-white sm:text-3xl">My Product</h1>
          </div>

          <div class="mt-8">
            <ul class="space-y-4">
              {
                whiteListProducts.map(({ id, image, price, title }) => {
                  return (
                    <li key={id}>
                      <div className="  bg-white rounded-md py-1 px-2 relative group max-w-[200px] mx-auto">
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
                          <p className="font-medium text-sm">{title}</p>
                          <div className="flex justify-between items-center">
                            <p className=" text-xl font-semibold">
                              <small className="text-sm font-normal">$</small>
                              {price}
                            </p>

                          </div>
                        </div>
                        <div className="absolute left-0 invisible group-hover:visible  top-0 bg-white bg-opacity-70 w-0 h-full group-hover:w-full rounded-md flex justify-center items-center space-x-4 transition-all">
                          <button onClick={() => dispatch(addToCart({ id, title, image, price }))} >
                            <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-orange-500" />
                          </button>
                          <Link href={`productDetails/${id}`} >
                            <AiOutlineEye className="text-2xl cursor-pointer hover:text-orange-500" />
                          </Link>
                        </div>
                      </div>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WhiteList;
