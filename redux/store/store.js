import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/addCart/cartSlice";
import whiteListSlice from "../features/whiteList/whiteListSlice";

export const store = configureStore({
    reducer: {
        addCart: cartSlice,
        whiteList: whiteListSlice
    }
})