import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      console.log("Logging in with email:", email);
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      console.log("Login response:", response);
      const jwtToken = response.data.body.token;
      return jwtToken;
    } catch (error) {
      console.error("Error logging in:", error);
      if (error.response) {
        const errorCode = error.response.status;
        if (errorCode === 400) {
          throw new Error("Invalid fields or bad request.");
        } else if (errorCode === 500) {
          throw new Error("Internal server error.");
        }
      }
      throw new Error("Error logging in:", error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async () => {
    try {
      console.log("Logging out user");
      // You can perform any necessary cleanup or additional actions here
      // For example, clearing local storage, etc.
      return null;
    } catch (error) {
      console.error("Error logging out user:", error);
      throw new Error("Error logging out user:", error);
    }
  }
);
