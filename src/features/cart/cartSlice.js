import { createSlice } from '@reduxjs/toolkit';
    const initialState = {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        cartQuantity: 0,
        cartTotal: 0,
    }
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            } localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = removeItem;
        },
        emptyCart: (state, action) => {
            state.cartItems = []
            
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;