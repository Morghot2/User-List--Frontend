import { configureStore } from "@reduxjs/toolkit";
import usersApiReducer, { usersApi } from "./slices/services/apiSlice";
import authApiReducer, { authApi } from "./slices/services/authApiSlice";

export default configureStore({
  reducer: {
    usersApi: usersApiReducer,
    authApi: authApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([usersApi.middleware, authApi.middleware]),
});
