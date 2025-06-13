// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Adjust path as needed
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice"
import products from "../../../backend/data/products";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrderReducer from "./slices/adminOrderSlice";

import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    products:productReducer,
    cart:cartReducer,
    checkout:checkoutReducer,
    orders:orderReducer,
    admin:adminReducer,
    adminProducts:adminProductReducer,
    adminOrders:adminOrderReducer,
  },
});

export default store;
