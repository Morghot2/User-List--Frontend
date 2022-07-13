import { createSlice } from '@reduxjs/toolkit';
import produce from "immer";


let initialState = {
  _id: "",
  firstName: "",
  lastName: "",
  email: ""
}

export const currentUserLoginSlice = createSlice({
  initialState,
  name: 'currentUserSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      return {...action.payload}
    },
  },
});

export default currentUserLoginSlice.reducer;

export const { logout, setUser } = currentUserLoginSlice.actions;




