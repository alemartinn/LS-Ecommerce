import {configureStore} from "@reduxjs/toolkit"
import { usersAPI } from "./actions/usersAPI"
import userReducer from "./user/userSlice"
import modalReducer from "./modal/modalSlice"
import colorReducer from "./theme/themeSlice"

export const store = configureStore({
    reducer:{
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer,
            color: colorReducer,
            modal: modalReducer
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(usersAPI.middleware)
})