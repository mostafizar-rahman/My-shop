import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { dicrementProduct, incrementProduct, removeToCart } from "@/redux/features/addCart/cartSlice";

const Cart = ({ cart, setCart }) => {
  const cartItems = useSelector((state) => state.addCart.cart)

  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce(
    (total, product) => total + product?.price * product?.quantity,
    0
  );

  return (
    <aside
      className={`fixed top-0  ${cart ? "right-0" : "-right-full"
        } duration-700 max-w-md w-full h-full bg-[#13263d] px-5 py-[60px] border-l border-[#516782] z-50`}
    >
      <div>
        <FaTimes
          onClick={() => setCart(false)}
          className="text-white text-xl cursor-pointer absolute top-5 left-5 hover:text-red-600 transition"
        />
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <div class="text-center">
            <h1 class="text-xl font-bold text-white sm:text-3xl">My Cart</h1>
          </div>

          <div class="mt-8">
            <ul class="space-y-4">
              {
                cartItems.map(({ id, quantity, image, price, title }) => {
                  return (
                    <li key={id} class="flex items-center gap-4">
                      <Image
                        src={image}
                        width={64}
                        height={64}
                        alt=""
                        class="h-16 w-16 rounded object-contain"
                      />
                      <div>
                        <h3 class="text-sm text-white">{title}</h3>
                        <small className="text-slate-100/70 ">
                          Price: {price}
                        </small>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <div>
                          <label htmlFor="Quantity" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>

                          <div className="flex items-center rounded border border-gray-200">
                            <button
                              onClick={() => dispatch(dicrementProduct(id))}
                              type="button"
                              className="h-10 w-10 leading-10 text-gray-200 transition hover:opacity-75"
                            >
                              -
                            </button>

                            <span>
                              <input
                                type="number"
                                id="Quantity"
                                value={quantity}
                                readOnly
                                className="h-10 w-16 border-y-0 bg-transparent text-white border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                              />
                            </span>

                            <button
                              onClick={() => dispatch(incrementProduct(id))}
                              type="button"
                              className="h-10 w-10 leading-10 text-gray-200 transition hover:opacity-75"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          className="text-gray-600 transition hover:text-red-600"
                          onClick={() => dispatch(removeToCart(id))}
                        >
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </li>
                  )
                })
              }

            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div class="w-screen max-w-lg space-y-4">
                <dl class="space-y-0.5 text-sm text-white">
                  <div class="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${totalPrice}</dd>
                  </div>
                </dl>

                <div class="flex justify-end">
                  <Link
                    href="/checkout"
                    class="block rounded bg-orange-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-orange-600"
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
