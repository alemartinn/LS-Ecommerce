import {configureStore} from "@reduxjs/toolkit";
import { usersAPI } from "./actions/usersAPI";
import userReducer from "./user/userSlice";
import modalReducer from "./modal/modalSlice";
import colorReducer from "./theme/themeSlice";
import recipeApi from "./recipes/recipesApi";
import boxesApi from "./boxes/boxesApi";
import alertReducer from "./alert/alertSlice";
import { cartReducer } from "./cart/cartSlice";
import commentsApi from "./comments/commentsApi";


export const store = configureStore({
    reducer:{
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer,
            color: colorReducer,
            modal: modalReducer,
            alert: alertReducer,
            cart: cartReducer,
            [recipeApi.reducerPath] : recipeApi.reducer,
            [boxesApi.reducerPath] : boxesApi.reducer,
            [commentsApi.reducerPath] : commentsApi.reducer,
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(usersAPI.middleware,recipeApi.middleware,boxesApi.middleware,commentsApi.middleware)
})