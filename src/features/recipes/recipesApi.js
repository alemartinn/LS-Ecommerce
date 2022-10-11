import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../../api";
const recipeApi = createApi({

    reducerPath: "recipeApi",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }), 

    endpoints: (builder) =>({
        getAllRecipe:builder.query({
            query: ()=> `/recipes`,
            transformResponse: res => res.response
        }),
        getOneRecipe:builder.query({
            query: (id) => `/recipes/${id}`,
            transformResponse: res => res.response
        }),
        getRecipesByFilter: builder.query({
            query: ({title, category}) => `/recipes/query/?title=${title}&category=${category}`,
            transformResponse: res => res.response
        }),
        createRecipe:builder.mutation({
            query: (data)=> ({
            url:`/recipes`,
            method: 'POST',
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
            body: data,
            })
        })
    }),
})


export default recipeApi
export const {useGetAllRecipeQuery, useGetOneRecipeQuery, useGetRecipesByFilterQuery ,useCreateRecipeMutation} = recipeApi
