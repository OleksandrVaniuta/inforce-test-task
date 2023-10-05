import { configureStore } from '@reduxjs/toolkit';
import { ProductsReducer } from './Products/ProductSlice';

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
