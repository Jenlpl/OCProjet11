import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth.actions";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  error: null,
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
    logoutUser(state, action) {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, remember } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      // Always set token in localStorage, regardless of the "remember" option
      localStorage.setItem("token", token);
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      console.error(action.error);
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.error.message;
    })
  }
});

export const { setToken, setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
