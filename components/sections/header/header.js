import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import SearchBox from "./searchBox";
import Logo from "../../ui/logo";
import CategoryList from "./categoryList";
import Link from "next/link";
import Cart from "../../Cart/Cart";
import { useSelector } from "react-redux";
import WhiteList from "../../WhiteList/WhiteList";

const Header = () => {
  const [cart, setCart] = useState(false);
  const [whiteList, setWhiteList] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const cartItems = useSelector((state) => state.addCart.cart)

  const whiteListItem = useSelector((state) => state.whiteList.whitList)


  const totalQuantity = cartItems.reduce(
    (total, product) => total + product?.quantity,
    0
  );

  return (
    <header className="max-w-[1900px] mx-auto bg-[#101f32] relative">
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

          </div>
        </div>
        <hr className="border-slate-700" />
        <div className="mx-auto max-w-7xl px-3 pt-5 pb-3 flex justify-between items-center">
          <div className="relative group">
            <b className="cursor-pointer bg-orange-500 px-5 py-3  text-white">SHOP BY CATEGORY</b>
            <div className="absolute w-max top-[120%] left-0 z-50 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-7 transition-all duration-500">
              <CategoryList />
            </div>
          </div>
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/" className="text-white font-semibold">Home</Link>
              </li>

              <li>
                <Link href="/contact" className="text-white font-semibold">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button onClick={() => setWhiteList(true)} className="relative">
              <span className="absolute -right-2 -top-2 bg-orange-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-[13px]">{whiteListItem.length}</span>
              <AiOutlineHeart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
            <button onClick={() => setCart(true)} className="relative">
              <span className="absolute -right-2 -top-2 bg-orange-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-[13px]">{totalQuantity}</span>
              <AiOutlineShoppingCart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>
      {/* ---------- For Mobile */}
      <div className="block md:hidden py-4 px-3 relative">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-5">
            <button onClick={() => setIsRegisterOpen(!isRegisterOpen)}>
              <AiOutlineUser className="text-2xl text-white hover:text-orange-500" />
            </button>
            <button onClick={() => setWhiteList(true)} className="relative">
              <span className="absolute -right-2 -top-2 bg-orange-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-[13px]">{whiteListItem.length}</span>
              <AiOutlineHeart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
            <button onClick={() => setCart(true)} className="relative">
              <span className="absolute -right-2 -top-2 bg-orange-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-[13px]">{totalQuantity}</span>
              <AiOutlineShoppingCart className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </button>
            <button className="ml-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {
                isMenuOpen ? <AiOutlineClose className="text-2xl cursor-pointer text-white hover:text-orange-500" /> :
                  <AiOutlineMenu
                    className="text-2xl cursor-pointer text-white hover:text-orange-500"
                  />
              }
            </button>
          </div>
        </div>
        <div className={`bg-[#101f32] min-h-screen h-full min-w-[200px] fixed  top-0 z-50 p-5 duration-700 ${isMenuOpen ? "left-0" : "-left-[160%]"}`}>
          <div>
            <SearchBox />
            <CategoryList />
          </div>
        </div>
      </div>

      <div className={`absolute z-40 top-full right-0 ${isRegisterOpen ? 'visible  ' : 'invisible '} transition-all   w-auto bg-[#101f32] text-white p-3`}>
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

      <Cart cart={cart} setCart={setCart} />
      <WhiteList whiteList={whiteList} setWhiteList={setWhiteList} />
    </header>
  );
};

export default Header;
