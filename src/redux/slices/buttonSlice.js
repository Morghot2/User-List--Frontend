import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  show: false,
  type: "",
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    changeModal: (state, action) => {
      return produce(state, (draftState) => {
        return (draftState = { ...state, show: action.payload });
      });
    },
    changeButtonType: (state, action) => {
      return produce(state, (draftState) => {
        return (draftState = { ...state, type: action.payload });
      });
    },
  },
});

export const { changeModal, changeButtonType } = buttonSlice.actions;
export default buttonSlice.reducer;
