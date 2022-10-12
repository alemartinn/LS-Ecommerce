import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(
                item => item._id === action.payload._id)
            if (itemInCart) {
                itemInCart.quantity++
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseQuantity: (state, action) => {
            const itemInCart = state.cartItems.find(
                item => item._id === action.payload._id)
            if (itemInCart.quantity > 1) {
                itemInCart.quantity--
            } else if (itemInCart.quantity === 1) {
                const removeItem = state.cartItems.filter(
                    item => item._id !== action.payload._id)
                state.cartItems = removeItem
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cartItems.filter(
                item => item._id !== action.payload._id)
            state.cartItems = removeItem
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        emptyCart: (state) => {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem
                const itemTotal = price * quantity
                cartTotal.total += itemTotal
                cartTotal.quantity += quantity
                return cartTotal
            },
                {
                    total: 0,
                    quantity: 0
                }
            )
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    decreaseQuantity,
    removeFromCart,
    emptyCart,
    getTotals
} = cartSlice.actions;
