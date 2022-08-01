import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addUser, deleteUser, editUser, fillUsersData } from "../recordSlice";

const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const recordsApi = createApi({
  reducerPath: "recordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/users`,
    credentials: "include",
  }),
  tagTypes: ["Records"],
  endpoints: (builder) => ({
    getRecords: builder.query({
      query: () => ({
        url: "/",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(fillUsersData(data));
        } catch (error) {}
      },
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
      query: (editedRecord) => ({
        url: `/${editedRecord.recordToChangeId}`,
        method: "PUT",
        body: editedRecord.userValues,
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
