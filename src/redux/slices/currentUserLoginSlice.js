import { createSlice } from '@reduxjs/toolkit';



const initialState = {token: "test"
};

export const currentUserLoginSlice = createSlice({
  initialState,
  name: 'currentUserSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default currentUserLoginSlice.reducer;

export const { logout, setUser } = currentUserLoginSlice.actions;




