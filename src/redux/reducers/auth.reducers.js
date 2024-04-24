import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth.actions";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token") || !!sessionStorage.getItem("token"),
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
      sessionStorage.setItem("token", action.payload);
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      state.isAuthenticated = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, remember } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.error(action.error);
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.error.message;
    });
  }
});

export const { setToken, setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
