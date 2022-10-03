import {configureStore} from "@reduxjs/toolkit"
import { usersAPI } from "./actions/usersAPI"
import userReducer from "./user/userSlice"
export const store = configureStore({
    reducer:{
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(usersAPI.middleware)
})