import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const recordSlice = createSlice({
  name: "record",

  initialState: [{ test: "test" }],
  reducers: {
    fillUsersData: (state, action) => {
      return { ...action.payload };
    },
    addUser: (state, action) => {
      return produce(state, (draftState) => {
        draftState.push(action.payload);
      });
    },
    deleteUser: (state, action) => {
      return produce(state, (draftState) => {
        return (draftState = state.filter(
          (user) => action.payload !== state.indexOf(user)
        ));
      });
    },
    editUser: (state, action) => {
      return produce(state, (draftState) => {
        draftState[action.payload.currentUser] = action.payload.userValues;
      });
    },
  },
});

export const { addUser, deleteUser, editUser, fillUsersData } = recordSlice.actions;
export default recordSlice.reducer;
