import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../../api";
const recipeApi = createApi({

    reducerPath: "recipeApi",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }), 

    endpoints: (builder) =>({
        allRecipe:builder.query({
            query: ()=> `/recipes`
        }),
        getOneRecipe:builder.query({
            query: (id)=> `/recipes/${id}`,
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
export const {useAllRecipeQuery,useGetOneRecipeQuery,useCreateRecipeMutation} = recipeApi
