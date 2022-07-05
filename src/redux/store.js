import { configureStore } from "@reduxjs/toolkit";
import usersApiReducer, { usersApi } from "./slices/apiSlice";

export default configureStore({
  reducer: {
    usersApi: usersApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
