import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import apiurl from "../../api";

export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (user) => ({
                url: "/auth/signup",
                method: "POST",
                body: user
            }),
        }),
        userSignIn: builder.mutation({
            query: (user, token) => ({
                url: "/auth/signin",
                method: "POST",
                body: user,
                headers: { "Authorization": "Bearer " + token }
            }),
        }),
        userSignOut: builder.mutation({
            query: (token) => ({
                url: "/auth/signout",
                method: "POST",
                headers: { "Authorization": "Bearer " + token }
            })
        }),
        verifyToken: builder.mutation({
            query: (token) => ({
                url: "/auth/verify-token",
                method: "POST",
                headers: { "Authorization": "Bearer " + token }
            })
        }),
        getUsers: builder.query({
            query: (token) => ({
                url: "auth/",
                method: "GET",
                headers: { "Authorization": "Bearer " + token }
            }),
            transformResponse: res=> res.response
        }),
        getUser: builder.query({
            query: ({id,token}) => ({
                url: `auth/${id}`,
                method: "GET",
                headers: { "Authorization": "Bearer " + token }
            }),
            transformResponse: res=> res.response
        }),
        updateRole: builder.mutation({
            query: ({ id, token, role }) => ({
                url: `auth/update/role/${id}`,
                method: "PUT",
                body:{role},
                headers: { "Authorization": "Bearer " + token }
            })
        }),
        removeUser: builder.mutation({
            query: ({ id, token }) => ({
                url: `auth/update/remove/${id}`,
                method: "DELETE",
                headers: { "Authorization": "Bearer " + token }
            })
        })
    })
})

    export const { 
            useUserSignUpMutation,
            useUserSignInMutation,
            useUserSignOutMutation,
            useVerifyTokenMutation,
            useGetUsersQuery,
            useGetUserQuery,
            useUpdateRoleMutation,
            useRemoveUserMutation
        } = usersAPI