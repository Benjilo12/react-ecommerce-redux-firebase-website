import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// 1. Install Redux and React-Redux

// 2. Create a Redux Store
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
