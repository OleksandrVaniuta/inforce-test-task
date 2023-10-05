import { createSlice } from '@reduxjs/toolkit';

import { getAllProducts, deleteProduct } from './ProductsOperation';

const PriductsInitialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const ProductsSlice = createSlice({
  name: 'Home',
  initialState: PriductsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (item) => item._id === action.payload.id
        );
        state.data.splice(index, 1);
      });
  },
});

export const ProductsReducer = ProductsSlice.reducer;
