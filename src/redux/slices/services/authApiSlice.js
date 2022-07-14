import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUserApi } from "./currentUserApiSlice";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/appusers`,
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
      // transformResponse: (response, meta, arg) =>
      //   localStorage.setItem("user", JSON.stringify(response.token)),
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      transformResponse: (response, meta, arg) =>
        localStorage.setItem("user", JSON.stringify(response.token)),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(currentUserApi.endpoints.getMe.initiate());
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
export default authApi.reducer;
