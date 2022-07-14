import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recordsApi = createApi({
  reducerPath: "recordsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/users" }),
  tagTypes: ["Records"],
  endpoints: (builder) => ({
    getRecords: builder.query({
      query: () => ({
        url: "/",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
      }),

      providesTags: ["Records"],
    }),
    addRecord: builder.mutation({
      query: (record) => ({
        url: "/",
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
        },
        method: "POST",
        body: record,
      }),
      invalidatesTags: ["Records"],
    }),
    updateRecord: builder.mutation({
      query: (record) => ({
        url: "/:id",
        method: "PUT",
        body: record,
      }),
      invalidatesTags: ["Records"],
    }),
    removeRecord: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
          },
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Records"],
    }),
    // getButton: builder.query({
    //     query: () => '/button',
    //     providesTags: ['Button']
    //   }),
    // changeButton: builder.mutation({
    //     query: (button) => ({
    //         url: '/button',
    //         method: 'PUT',
    //         body: button
    //     }),
    //     invalidatesTags: ['Button']
    //   }),
    // getCurrentUser: builder.query({
    //     query: () => '/currentuser',
    //     providesTags: ['Current']
    //   }),
    // changeCurrentUser: builder.mutation({
    //     query: (currentUser) => ({
    //         url: '/currentuser',
    //         method: 'PUT',
    //         body: currentUser
    //     }),
    //     invalidatesTags: ['Current']
    //   })
  }),
});
export const {
  useGetRecordsQuery,
  useAddRecordMutation,
  useUpdateRecordMutation,
  useRemoveRecordMutation,
} = recordsApi;
export default recordsApi.reducer;
