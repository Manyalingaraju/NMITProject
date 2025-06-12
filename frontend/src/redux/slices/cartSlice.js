import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : { items: [] };
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return { items: [] };
  }
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
};
 
// Fetch cart by userId or guestId
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/cart', {
        params: {
          userId,
          guestId
        }
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//Add an item to the cart for a user or guest
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, guestId, productId, quantity, variation }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/cart', {
        userId,
        guestId,
        productId,
        quantity,
        variation // like size, color, etc.
      });

      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
//Update the quantity of an item in the cart 
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ userId, guestId, productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.put("/api/cart", {
        userId,
        guestId,
        productId,
        quantity,
      });
      return response.data.cart; // updated cart
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
//Remove an item from the cart 
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItem",
  async ({ userId, guestId, productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete("/api/cart", {
        //method: "DELETE",
        data: { userId, guestId, productId },
      });
      return response.data.cart; // updated cart after removal
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to remove item");
    }
  }
);
//Merge guest cart into user cart
export const mergeGuestCartWithUserCart = createAsyncThunk(
  "cart/mergeGuestCartWithUserCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/cart/merge", {
        userId,
        guestId
      },{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("userToken")}`,

        }
      });
      return response.data.cart; // merged cart
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to merge carts");
    }
  }
);
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart(state) {
      state.items = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update quantity
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Remove from cart
      .addCase(removeItemFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Merge guest cart
      .addCase(mergeGuestCartWithUserCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mergeGuestCartWithUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(mergeGuestCartWithUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;


