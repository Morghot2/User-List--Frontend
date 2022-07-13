import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../currentUserLoginSlice.js";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;



export const currentUserApi = createApi({
  reducerPath: "currentUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/appusers`,
    // prepareHeaders: (headers) => {
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   // If we have a token set in state, let's assume that we should be passing it.

    //   headers.set("authorization", `Bearer ${user}`);
    // },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "/me",
          headers: { "authorization": `Bearer ${localStorage.getItem("user")}` },
          credentials: "include",
        };
      },
      // transformResponse: (result, meta, arg) => dispatch(setUser(result.data)),
      // transformResponse: (result) =>
      //   result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
export const {useGetMeQuery} = currentUserApi;

export default currentUserApi.reducer;
