import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/addCart/cartSlice";

export const store = configureStore({
    reducer: {
        addCart: cartSlice
    }
})