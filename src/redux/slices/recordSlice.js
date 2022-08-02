import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
  name: "record",

  initialState: [],
  reducers: {
    fillUsersData: (state, action) => {
      return [ ...action.payload ];
    },
    addUser: (state, action) => {
      return [...state, action.payload];
    },
    deleteUser: (state, action) => {
      return state.filter((record) => record._id !== action.payload);
    },
    editUser: (state, action) => {
      const { recordToChangeId, userValues } = action.payload;
      const toChange = state.indexOf(
        state.find((record) => record._id === recordToChangeId)
      );
      state[toChange] = { ...userValues };
    },
  },
});

export const { addUser, deleteUser, editUser, fillUsersData } =
  recordSlice.actions;
export default recordSlice.reducer;
