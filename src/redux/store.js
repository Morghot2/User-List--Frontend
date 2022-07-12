import { configureStore } from "@reduxjs/toolkit";
import usersApiReducer, { usersApi } from "./slices/services/apiSlice";

export default configureStore({
  reducer: {
    usersApi: usersApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
