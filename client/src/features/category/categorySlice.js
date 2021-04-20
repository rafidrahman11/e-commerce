import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: JSON.parse(localStorage.getItem("category")) || [],
  },
  reducers: {
    syncCategories: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { syncCategories } = categorySlice.actions;

export const selectCategory = (state) => state.category;

export default categorySlice.reducer;
