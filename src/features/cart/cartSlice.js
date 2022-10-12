import { createSlice } from "@reduxjs/toolkit"
import { json } from "react-router-dom"

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity++
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
  },
})
export default cartSlice.reducer
export const { addToCart } = cartSlice.actions