import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunks";

const initialState = {
  isAuthenticated: false,
  user: {
    firstName: null,
    // other user-related fields if needed
  },
  // Other initial state properties here
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      // Assuming the action.payload contains user information
      state.user = action.payload;
    });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
