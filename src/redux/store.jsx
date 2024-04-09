import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
  // Other initial state properties here
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState // Optional: Provide initial state here
});

export default store;
