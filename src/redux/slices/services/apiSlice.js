import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  tagTypes: ['Current', 'Users', 'Button'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/',
      providesTags: ['Users']
    }),
    addUser: builder.mutation({
        query: (user) => ({
            url: '/',
            method: 'POST',
            body: user
        }),
        invalidatesTags: ['Users']     
    }),
    updateUser: builder.mutation({
        query: (user) => ({
            url: '/',
            method: 'PUT',
            body: user
        }),
        invalidatesTags: ['Users']     
    }),
    removeUser: builder.mutation({
        query: (id) => ({
            url: '/',
            method: 'DELETE',
            body: id
        }),
        invalidatesTags: ['Users']     
    }),
    getButton: builder.query({
        query: () => '/button',
        providesTags: ['Button']
      }),
    changeButton: builder.mutation({
        query: (button) => ({
            url: '/button',
            method: 'PUT',
            body: button
        }),
        invalidatesTags: ['Button']     
      }),
    getCurrentUser: builder.query({
        query: () => '/currentuser',
        providesTags: ['Current']
      }),
    changeCurrentUser: builder.mutation({
        query: (currentUser) => ({
            url: '/currentuser',
            method: 'PUT',
            body: currentUser
        }),
        invalidatesTags: ['Current']     
      })
  })
});
export const { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useRemoveUserMutation, useGetButtonQuery, useChangeButtonMutation, useGetCurrentUserQuery, useChangeCurrentUserMutation } = usersApi
export default usersApi.reducer
