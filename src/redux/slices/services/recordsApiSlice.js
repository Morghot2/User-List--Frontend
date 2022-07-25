import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { io } from "socket.io-client";

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
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;
          const socket = io(API_URL, {
            path: "/api/users",
            withCredentials: true,
          });
          console.log(`socket.connected: ${socket.connected}`);
          socket.on("Trying", (data) => {
            console.log(data)
            console.log("socket connected on rtk query");
            updateCachedData((draft) => {
              draft.push(data);
            });
          });
          await cacheEntryRemoved;
        } catch {
          console.log("error");
        }
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
