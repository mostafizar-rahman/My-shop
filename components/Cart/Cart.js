import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { dicrementProduct, incrementProduct, removeToCart } from "@/redux/features/addCart/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";

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
            <h1 className="text-xl font-bold text-white sm:text-3xl">My Product</h1>
          </div>

          <div className="mt-8">
            <ul className="space-y-4">
              {
                cartItems.map(({ id, quantity, image, price, title }) => {
                  return (
                    <li key={id} className="flex justify-between gap-4">
                      <div className="flex gap-3">
                        <Image
                          src={image}
                          width={64}
                          height={64}
                          alt=""
                          className="h-20 w-20 rounded object-contain bg-white p-1"
                        />
                        <div>
                          <h3 className="text-sm text-white">{title}</h3>
                          <small className="text-slate-100/70 ">
                            Price: {price}
                          </small>
                          <br />
                          <small className="text-slate-100/70 ">
                            Color: {"red"}
                          </small>
                          <br />
                          <small className="text-slate-100/70 ">
                            Size: {"M"}
                          </small>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 h-8">
                        <div>
                          <div className="flex items-center rounded border border-gray-200 h-8">
                            <button
                              onClick={() => dispatch(dicrementProduct(id))}
                              type="button"
                              className="h-8 w-8  text-black/70 bg-white transition hover:opacity-75 rounded-l"
                            >
                              -
                            </button>

                            <span>
                              <input
                                type="number"
                                id="Quantity"
                                value={quantity}
                                readOnly
                                className="h-10 w-16 border-y-0 bg-transparent text-white border-gray-200 text-center "
                              />
                            </span>

                            <button
                              onClick={() => dispatch(incrementProduct(id))}
                              type="button"
                              className="h-8 w-8  text-black/70 bg-white transition hover:opacity-75 rounded-r"
                            >
                              +
                            </button>
                          </div>
                        </div>

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

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-white">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${totalPrice}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <Link
                    href="/login"
                    className="block rounded bg-orange-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-orange-600"
                  >
                    Checkout
                  </Link>
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
