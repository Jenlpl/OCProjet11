import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initialState = {
  isAuthenticated: false,
  // Other initial state properties here
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle loginUser success case
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true; // Update isAuthenticated to true upon successful login
    });
  },
});

export default authSlice.reducer;
