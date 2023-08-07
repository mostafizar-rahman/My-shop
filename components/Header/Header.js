import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import SearchBox from "./SearchBox/SearchBox";
import Logo from "./Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  return (
    <header className=" bg-[#101f32] relative">
      <div className="hidden md:block">
        <div className=" mx-auto max-w-7xl px-3 py-3 flex justify-between items-center ">
          <div>
            <Logo />
          </div>
          <SearchBox />
          <div>
            <button onClick={() => setIsRegisterOpen(!isRegisterOpen)}>
              <AiOutlineUser className="text-2xl text-white hover:text-orange-500" />
            </button>
            <div className={`absolute top-full z-40 right-0 ${isRegisterOpen ? 'visible' : 'invisible'}  h-auto w-auto bg-[#101f32] text-white p-3`}>
              <div>
                <Link href={"/login"} className="font-semibold hover:text-orange-500">Log in</Link>

                <p className="text-sm mt-1">If you have don't account plase login</p>
              </div>
              <hr className="my-3 border-slate-700" />
              <div>
                <Link href={"/singup"} className="font-semibold hover:text-orange-500">Sing up</Link>
                <p className="text-sm mt-1">If you have don't account plase login</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-slate-700" />
        <div className="mx-auto max-w-7xl px-3 py-5 flex justify-between items-center">
          <div className="relative group">
            <b className="cursor-pointer bg-orange-500 px-5 py-3  text-white">SHOP BY CATEGORY</b>
            <div className="absolute w-full top-[120%] left-0 z-50 invisible group-hover:visible">
              <CategoryList />
            </div>
          </div>
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/" className="text-white font-semibold">Home</Link>
              </li>
              <li>
                <Link href="/" className="text-white font-semibold">About</Link>
              </li>
              <li>
                <Link href="/" className="text-white font-semibold">Shop</Link>
              </li>
              <li>
                <Link href="/" className="text-white font-semibold">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button>
              <AiOutlineHeart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
            <button onClick={() => setCart(true)}>
              <AiOutlineShoppingCart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>
      {/* ---------- For Mobile */}
      <div className="block md:hidden py-4 px-3 relative">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <AiOutlineMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl cursor-pointer text-white hover:text-orange-500"
            />
          </div>
        </div>
        <div
          className={`bg-[#ddd] min-h-screen h-full min-w-[200px] fixed  top-0 z-50 p-5 duration-700 ${isMenuOpen ? "left-0" : "-left-[160%]"
            }`}
        >
          <div>
            <CategoryList />
            <SearchBox />
          </div>
        </div>
      </div>
      <Cart cart={cart} setCart={setCart} />
    </header>
  );
};

export default Header;
