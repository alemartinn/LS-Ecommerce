import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import apiurl from "../../api";
const recipeApi = createApi({

    reducerPath: "recipeApi",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }), 

    endpoints: (builder) =>({
        getAllRecipe:builder.query({
            query: (inputRecipe)=> `/recipes/`,
            transformResponse: res => res.response
        }),
        getOneRecipe:builder.query({
            query: (id)=> `/recipes/${id}`,
            transformResponse: res => res.response
        }),
        getRecipeByFilter: builder.query({
            query: ({inputRecipe, inputCategory}) => `/recipes/?recipe=${inputRecipe}&category=${inputCategory}`
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
export const {useGetAllRecipeQuery,useGetOneRecipeQuery,useCreateRecipeMutation} = recipeApi
