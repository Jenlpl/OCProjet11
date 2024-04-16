import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth.actions";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  // Get the token if one exists in the localStorage. If not, it will be null.
  token: localStorage.getItem("token"),
  error: null,
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
    logoutUser(state, action) {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    }
    // Add other reducers as needed
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, remember } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
        localStorage.setItem("token", token);   
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      console.error(action.error);
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.error = action.error.message;
    })
  }
});

export const { setToken, setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
