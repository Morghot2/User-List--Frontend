import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { userApi } from "./userApi";

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
      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   try {
      //     await queryFulfilled;
      //     await dispatch(userApi.endpoints.getMe.initiate(null));
      //   } catch (error) {}
      // },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
export default authApi.reducer