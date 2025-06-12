// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Adjust path as needed
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice"
import products from "../../../backend/data/products";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products:productReducer,
    cart:cartReducer,
  },
});

export default store;
