import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  // Other initial state properties here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
