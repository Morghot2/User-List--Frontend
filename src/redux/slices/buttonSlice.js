import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  type: "",
  record: "",
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    changeModal: (state, action) => {
      return { ...state, show: action.payload };
    },
    changeButtonType: (state, action) => {
      return { ...state, type: action.payload };
    },
    changeEditedRecord: (state, action) => {
      return { ...state, record: action.payload };
    },
  },
});

export const { changeModal, changeButtonType, changeEditedRecord } = buttonSlice.actions;
export default buttonSlice.reducer;
