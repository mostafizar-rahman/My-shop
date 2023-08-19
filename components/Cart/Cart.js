import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { dicrementProduct, incrementProduct, removeToCart } from "@/redux/features/addCart/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";
import Checkout from "../Checkout/Checkout";
import QuentityButton from "../QuentityButton/QuentityButton";

const Cart = ({ cart, setCart }) => {
  const cartItems = useSelector((state) => state.addCart.cart)

  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );

  return (
    <aside
      className={`fixed top-0 bottom-0 overflow-y-auto ${cart ? "right-0" : "-right-full"
        } duration-700 max-w-md w-full h-full bg-[#13263d] px-5 py-[60px] border-l border-[#516782] z-50 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
    >
      <div>
        <FaTimes
          onClick={() => setCart(false)}
          className="text-white text-xl cursor-pointer absolute top-5 left-5 hover:text-red-600 transition"
        />
      </div>

      <div >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-xl font-bold text-white sm:text-2xl">My Product</h1>
          </div>

          <div className="mt-8">
            <ul className="space-y-4">
              {
                !cartItems.length ?
                  <div>
                    <h5 className="text-red-500 text-center">No item in your cart</h5>
                  </div> :
                  cartItems.map(({ id, quantity, image, price, title, activeColor, activeSize }) => {
                    return (
                      <li key={id} className="flex justify-between gap-4">
                        <div className="flex gap-3">
                          <Image
                            src={image}
                            width={64}
                            height={64}
                            alt="image"
                            className="h-20 w-20 rounded object-contain bg-white p-1"
                          />
                          <div>
                            <h3 className="text-sm text-white">
                              {title.length > 30 ? title.slice(0, 30) + '...' : title}</h3>
                            <div className="flex flex-col">
                              <small className="text-slate-100/70 ">
                                Price: {price}
                              </small>
                              <small className="text-slate-100/70 ">
                                Color: {activeColor}
                              </small>
                              <small className="text-slate-100/70 ">
                                Size: {activeSize}
                              </small>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 h-8">
                          <QuentityButton id={id} quantity={quantity} />
                          <button
                            onClick={() => dispatch(removeToCart(id))}
                          >
                            <AiOutlineDelete className="text-white/90 text-xl hover:text-red-600" />
                          </button>
                        </div>
                      </li>
                    )
                  })
              }

            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-600 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-white">
                  <div className="flex justify-between !text-base font-medium">
                    <dt className="font-semibold text-xl">Total</dt>
                    <dd className="text-lg"><span className="text-sm">$</span>{totalPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn bg-orange-500 hover:scale-90 duration-700 ease-in-out text-white rounded-sm inline-block sm:px-14 px-10 py-2 sm:py-3 mt-5"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Cart;
