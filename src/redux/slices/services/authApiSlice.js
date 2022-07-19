import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUserApi } from "./currentUserApiSlice";
import { recordsApi } from "./recordsApiSlice";

const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/appusers`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(data) {
        return {
          url: "/",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(recordsApi.endpoints.getRecords.initiate());
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
export default authApi.reducer;
