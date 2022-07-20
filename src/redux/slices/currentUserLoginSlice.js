import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  isLogged: false,
};

export const currentUserLoginSlice = createSlice({
  initialState,
  name: "currentUserSlice",
  reducers: {
    setUser: (state, action) => {
      return { ...action.payload };
    },
  },
});

export default currentUserLoginSlice.reducer;

export const { setUser } = currentUserLoginSlice.actions;
