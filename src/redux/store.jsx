import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authThunks';

const initialState = {
  auth: { // Ensure the initial state has a key named 'auth'
    isAuthenticated: false,
    user: null,
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: initialState,
});

export default store;
