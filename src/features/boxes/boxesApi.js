import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../../api";

const boxesApi = createApi({

    reducerPath: "boxesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }), 

    endpoints: (builder) =>({
        allBoxes:builder.query({
            query: ()=> `/boxes`,
            transformResponse: res => res.response
        }),
        getOneBox:builder.query({
            query: (id)=> `/boxes/${id}`
        }),
        createBoxes:builder.mutation({
            query: (data)=> ({
            url:`/boxes`,
            method: 'POST',
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
            body: data,
            })
        })
    }),
})


export default boxesApi
export const {useAllBoxesQuery,useGetOneBoxQuery,useCreateBoxesMutation} = boxesApi
