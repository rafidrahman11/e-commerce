import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: {},
  },
  reducers: {
    addProduct: (state, action) => {
      let products = { ...state.products };
      products[action.payload._id] = action.payload;
      state.products = products;
    },

    removeProduct: (state, action) => {
      const products = { ...state.products };
      delete products[action.payload];
      state.products = products;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
