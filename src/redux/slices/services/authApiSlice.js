import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { currentUserApi } from "./currentUserApiSlice";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

// const user = JSON.parse(localStorage.getItem("user"));
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2MwZjBlMjU1ZGM0YmZhMmZkYjE2YiIsImlhdCI6MTY1NzcxMTc3NiwiZXhwIjoxNjYwMzAzNzc2fQ.ZEJHuZhYfwOSMSUMP91PdFKHoIXITxJPHbfhWlMHp5Y"
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
      //     await dispatch(currentUserApi.endpoints.getMe.initiate({}));
      //   } catch (error) {}
      // },
    }),
    // logoutUser: builder.mutation({
    //   query() {
    //     return {
    //       url: "logout",
    //       credentials: "include",
    //     };
    //   },
    // }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
export default authApi.reducer;
