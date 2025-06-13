import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all orders (admin only)
export const fetchAllOrders = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
        {
          headers: {
            Authorization: 'Bearer ${localStorage.getItem("userToken")}',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// update order delivery status
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async ({id,status}, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,{status},
        {
          headers: {
            Authorization: 'Bearer ${localStorage.getItem("userToken")}',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


//  delete order delivery status
export const deleteOrderStatus = createAsyncThunk(
  "adminOrders/fetchAllOrders",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
        {
          headers: {
            Authorization: 'Bearer ${localStorage.getItem("userToken")}',
          },
        }
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const adminOrderSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all orders - pending
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Fetch all orders - fulfilled
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.totalOrders = action.payload.length;
        //calculate total sales
        state.totalSales = action.payload.reduce((acc,order)=>{
            return acc+order.totalPrice;
        },0);
        state.totalSales=totalSales;
      })

      // Fetch all orders - rejected
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
    //update order status
    .addCase(updateOrderStatus.fulfilled,(state,action)=>{
        const updatedOrder =action.payload;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );
        if (orderIndex !== -1) {
          state.orders[orderIndex] = updatedOrder;
        }
      })

      // Delete Order
      .addCase(deleteOrder.fulfilled, (state, action) => {
        const deletedOrderId = action.payload;
        state.orders = state.orders.filter(
          (order) => order._id !== deletedOrderId
        );
      });
  },
});
    
export default adminOrderSlice.reducer;
