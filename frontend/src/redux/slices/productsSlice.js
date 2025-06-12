import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products with filters
export const fetchProductsByFilters = createAsyncThunk(
  "products/fetchByFilters",
  async ({
    category,
    color,
    size,
    material,
    brand,
    type,
    minPrice,
    maxPrice,
    sortBy,
    search,
  }) => {
    const query = new URLSearchParams();

    if (category) query.append("category", category);
    if (color) query.append("color", color);
    if (size?.length) size.forEach((s) => query.append("size", s));
    if (material?.length) material.forEach((m) => query.append("material", m));
    if (brand?.length) brand.forEach((b) => query.append("brand", b));
    if (type) query.append("type", type);
    if (minPrice !== undefined) query.append("minPrice", minPrice);
    if (maxPrice !== undefined) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);

    const response = await axios.get(`/api/products?${query.toString()}`);
    return response.data;
  }
);

// Fetch single product
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    const response = await axios.get(`/api/products/${productId}`);
    return response.data;
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
);

// Fetch similar products
export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async (id) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}/similar`
    );
    return response.data;
  }
);

// Product slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      material: "",
      size: "",
      color: "",
      priceRange: { min: 0, max: 0 },
      brand: "",
      searchQuery: "",
    },
  },
  reducers: {
    setCategoryFilter(state, action) {
      state.filters.category = action.payload;
    },
    setMaterialFilter(state, action) {
      state.filters.material = action.payload;
    },
    setSizeFilter(state, action) {
      state.filters.size = action.payload;
    },
    setColorFilter(state, action) {
      state.filters.color = action.payload;
    },
    setPriceRange(state, action) {
      state.filters.priceRange = action.payload;
    },
    setBrandFilter(state, action) {
      state.filters.brand = action.payload;
    },
    setSearchQuery(state, action) {
      state.filters.searchQuery = action.payload;
    },
    clearFilters(state) {
      state.filters = {
        category: "",
        material: "",
        size: "",
        color: "",
        priceRange: { min: 0, max: 0 },
        brand: "",
        searchQuery: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.similarProducts = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      });
  },
});

// Export actions
export const {
  setCategoryFilter,
  setMaterialFilter,
  setSizeFilter,
  setColorFilter,
  setPriceRange,
  setBrandFilter,
  setSearchQuery,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;
