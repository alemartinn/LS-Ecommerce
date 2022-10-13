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
        getBoxesByFilter: builder.query({
            query: ({name, category}) => `/boxes/query/?name=${name}&category=${category}`,
            transformResponse: res => res.response
        }),
        getOneBox:builder.query({
            query: (id)=> `/boxes/${id}`,
            transformResponse: res => res.response
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
export const {useAllBoxesQuery, useGetBoxesByFilterQuery, useGetOneBoxQuery, useCreateBoxesMutation} = boxesApi
