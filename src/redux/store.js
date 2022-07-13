import { configureStore } from "@reduxjs/toolkit";
import usersApiReducer, { usersApi } from "./slices/services/apiSlice";
import authApiReducer, { authApi } from "./slices/services/authApiSlice";
// import currentUserReducer, {currentUserApi} from "./slices/services/currentUserApiSlice";
// import currentUserLoginReducer from "./slices/currentUserLoginSlice";
export default configureStore({
  reducer: {
    usersApi: usersApiReducer,
    authApi: authApiReducer,
    // currentUserApi: currentUserReducer,
    // userState: currentUserLoginReducer,


    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([usersApi.middleware, authApi.middleware]),
});
