import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    name: "addCart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isAviable = state.cart.find(({ id }) => id === action.payload.id)
            if (isAviable) {
                isAviable.quantity++
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }

        },
        incrementProduct: (state, action) => {
            const itemInCart = state.cart.find(({ id }) => id === action.payload)
            if (itemInCart) {
                itemInCart.quantity += 1;
            }
        },
        dicrementProduct: (state, action) => {
            
            const itemInCart = state.cart.find(({ id }) => id === action.payload)
            if (itemInCart) {
                itemInCart.quantity -= 1;
            }
        },

        removeToCart: (state, action) => {
            const itemInCart = state.cart.filter(({ id }) => id !== action.payload)
            state.cart = itemInCart
        }
    }
})
export const { addToCart, incrementProduct, dicrementProduct, removeToCart } = cartSlice.actions
export default cartSlice.reducer