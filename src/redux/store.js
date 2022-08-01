import { configureStore } from "@reduxjs/toolkit";

import authApiReducer, { authApi } from "./slices/services/authApiSlice";
import recordsApiReducer, {
  recordsApi,
} from "./slices/services/recordsApiSlice";
import currentUserReducer, {
  currentUserApi,
} from "./slices/services/currentUserApiSlice";
import currentUserLoginReducer from "./slices/currentUserLoginSlice";
import buttonReducer from "./slices/buttonSlice";
import recordReducer from "./slices/recordSlice";


export default configureStore({
  reducer: {
    authApi: authApiReducer,
    currentUserApi: currentUserReducer,
    recordsApi: recordsApiReducer,
    userState: currentUserLoginReducer,
    buttonState: buttonReducer,
    recordState: recordReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      currentUserApi.middleware,
      recordsApi.middleware,
    ]),
});
