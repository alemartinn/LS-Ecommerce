import {configureStore} from "@reduxjs/toolkit"
import { usersAPI } from "./actions/usersAPI"
import userReducer from "./user/userSlice"
import modalReducer from "./modal/modalSlice"
import colorReducer from "./theme/themeSlice"
import recipeApi from "./recipes/recipesApi"
import boxesApi from "./boxes/boxesApi"
import alertReducer from "./alert/alertSlice"
export const store = configureStore({
    reducer:{
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer,
            color: colorReducer,
            modal: modalReducer,
            alert: alertReducer,
            [recipeApi.reducerPath] : recipeApi.reducer,
            [boxesApi.reducerPath] : boxesApi.reducer,
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(usersAPI.middleware,recipeApi.middleware,boxesApi.middleware)
})