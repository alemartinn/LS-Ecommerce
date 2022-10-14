import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../../api";

const commentsApi = createApi({

    reducerPath: "commentsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }), 

    endpoints: (builder) =>({
        create:builder.mutation({
            query: (data)=> ({
            url:`/comments`,
            method: 'POST',
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
            body: data,
        })
        }),
        delete:builder.query({
            query: ({id,token}) => ({
                url: `/recipes/${id}`,
                method: "DELETE",
                headers: {"Authorization": `Bearer ${token}`}
            })       
        }),
        allComment:builder.query({
            query: (id)=>( {
            url: `/comments/${id}`,
            transformResponse: res => res.response   
        })
    }),
        edit: builder.mutation({
            query:(id,data) =>({
                url: `/comments/${id}`,
                method: 'PATCH',
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
                body: data
            })
        })
    })
})


export default commentsApi
export const {useCreateMutation, useDeleteQuery, useEditMutation,useAllCommentQuery} = commentsApi