import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/productSlice';

const store = configureStore({
  reducer: {
    products: bookReducer
  },
})

export default store