import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../currentUserLoginSlice.js";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

const user = JSON.parse(localStorage.getItem("user"));

export const currentUserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/appusers`,
    prepareHeaders: (headers) => {
      // If we have a token set in state, let's assume that we should be passing it.

      headers.set("authorization", `Bearer ${user}`);
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "/me",
          credentials: "include",
        };
      },
      // transformResponse: (result) =>
      //   result.data.user,
      // async onQueryStarted(args, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //     dispatch(setUser(data));
      //   } catch (error) {}
      // },
    }),
  }),
});

export default currentUserApi.reducer;
