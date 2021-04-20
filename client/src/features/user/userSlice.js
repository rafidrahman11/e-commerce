import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")) || {},
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.data = {};
      state.isLoggedIn = false;
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
