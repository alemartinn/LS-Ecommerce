import {configureStore} from "@reduxjs/toolkit"
import { usersAPI } from "./actions/usersAPI"
import userReducer from "./user/userSlice"
import colorReducer from "./theme/themeSlice"

export const store = configureStore({
    reducer:{
            [usersAPI.reducerPath]: usersAPI.reducer,
            user: userReducer,
            color: colorReducer
        },
        middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
            inmutableCheck:false,
            serializableCheck: false,
        }).concat(usersAPI.middleware)
})