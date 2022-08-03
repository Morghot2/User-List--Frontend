import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../currentUserLoginSlice.js";
import {currentUserApi} from "./currentUserApiSlice";

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
          await dispatch(currentUserApi.endpoints.getMe.initiate());
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "/logout",
          method: "POST",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLogoutUserMutation, useLoginUserMutation, useRegisterUserMutation } = authApi;
export default authApi.reducer;
