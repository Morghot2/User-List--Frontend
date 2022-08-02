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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(addUser(record));
        } catch (error) {}
      },
      invalidatesTags: ["Records"],
      
    }),
    updateRecord: builder.mutation({
      query: (editedRecord) => ({
        url: `/${editedRecord.recordToChangeId}`,
        method: "PUT",
        body: editedRecord.userValues,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(editUser(editedRecord));
        } catch (error) {}
      },
      invalidatesTags: ["Records"],
    }),
    removeRecord: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(deleteUser(id));
        } catch (error) {}
      },
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
