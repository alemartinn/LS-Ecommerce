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
        }),
        recipesFromUser:builder.query({
            query: ()=> ({url:`/recipes/queryuser`,
            headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            }),
            transformResponse: res => res.response
        }),
        getNotApprovedRecipes: builder.mutation({
            query: (token) => ({
                url: "/recipes/approve",
                headers: {"Authorization": `Bearer ${token}`}
            }),
            transformResponse: res => res.response
        }),
        getNotApprovedRecipe: builder.mutation({
            query: ({token,id}) => ({
                url: `/recipes/approve/${id}`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        }),
        removeRecipe: builder.mutation({
            query: ({id,token}) => ({
                url: `/recipes/${id}`,
                method: "DELETE",
                headers: {"Authorization": `Bearer ${token}`}
            })
        }),
        approveRecipe: builder.mutation({
            query: ({ id, token }) => ({
                url: `/recipes/approve/${id}`,
                method: "PATCH",
                headers: {"Authorization": `Bearer ${token}`}
            })
        })
    }),
})


export default recipeApi
export const {
    useRecipesFromUserQuery,
    useGetAllRecipeQuery,
    useGetOneRecipeQuery,
    useGetRecipesByFilterQuery,
    useCreateRecipeMutation,
    useGetNotApprovedRecipesMutation,
    useGetNotApprovedRecipeMutation,
    useRemoveRecipeMutation,
    useApproveRecipeMutation
} = recipeApi
