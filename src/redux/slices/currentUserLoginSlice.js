import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  user: null,
};

export const currentUserLoginSlice = createSlice({
  initialState,
  name: 'currentUserSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default currentUserLoginSlice.reducer;

export const { logout, setUser } = currentUserLoginSlice.actions;




