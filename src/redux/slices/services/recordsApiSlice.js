import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//LATER HAVE TO "PREPARE HEADERS" instead of single request - just not to forget

export const recordsApi = createApi({
  reducerPath: "recordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/users",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${JSON.parse(localStorage.getItem("user"))}`);
      return headers;
    },
  }),
  tagTypes: ["Records"],
  endpoints: (builder) => ({
    getRecords: builder.query({
      query: () => ({
        url: "/",
      }),
      providesTags: ["Records"],
    }),
    addRecord: builder.mutation({
      query: (record) => ({
        url: "/",
        method: "POST",
        body: record,
      }),
      invalidatesTags: ["Records"],
    }),
    updateRecord: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "PUT",
        body: id,
      }),
      invalidatesTags: ["Records"],
    }),
    removeRecord: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Records"],
    }),
  }),
});
export const {
  useGetRecordsQuery,
  useAddRecordMutation,
  useUpdateRecordMutation,
  useRemoveRecordMutation,
} = recordsApi;
export default recordsApi.reducer;

// headers: {
//   authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
// },
