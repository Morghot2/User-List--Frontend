import { configureStore } from "@reduxjs/toolkit";
import usersApiReducer, { usersApi } from "./slices/services/apiSlice";
import authApiReducer, { authApi } from "./slices/services/authApiSlice";
import recordsApiReducer, { recordsApi } from "./slices/services/recordsApiSlice";
import currentUserReducer, {
  currentUserApi,
} from "./slices/services/currentUserApiSlice";
import currentUserLoginReducer from "./slices/currentUserLoginSlice";
import buttonReducer from "./slices/buttonSlice";
export default configureStore({
  reducer: {
    usersApi: usersApiReducer,
    authApi: authApiReducer,
    currentUserApi: currentUserReducer,
    recordsApi: recordsApiReducer,
    userState: currentUserLoginReducer,
    buttonState: buttonReducer,
    
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([usersApi.middleware, authApi.middleware, currentUserApi.middleware, recordsApi.middleware]),
});
