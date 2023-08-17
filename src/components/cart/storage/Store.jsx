import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cart reducer

// Configure the Redux store using configureStore
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cart reducer under the 'cart' key in the store state
  },
});

export default store; // Export the configured Redux store
