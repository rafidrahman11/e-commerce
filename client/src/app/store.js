import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import categoryReducer from "../features/category/categorySlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});
