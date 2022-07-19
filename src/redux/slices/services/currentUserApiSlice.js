import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../currentUserLoginSlice.js";

const API_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const currentUserApi = createApi({
  reducerPath: "currentUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/appusers`,
    credentials: "include",
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
export const { useGetMeQuery } = currentUserApi;

export default currentUserApi.reducer;
