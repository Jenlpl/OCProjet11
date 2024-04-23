import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth.actions";

// Initialisation de l'état initial du reducer
const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  error: null,
};

// Création du slice du reducer pour gérer l'authentification
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer pour définir le token d'authentification et marquer l'utilisateur comme authentifié
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    // Reducer pour définir les informations de l'utilisateur
    setUser(state, action) {
      state.user = action.payload;
    },
     // Reducer pour déconnecter l'utilisateur
    logoutUser(state, action) {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.error = null;
    }
  
  },

  // Gestion des actions asynchrones avec Redux Toolkit
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { token, remember } = action.payload;
      state.token = token;
      state.isAuthenticated = true;
        localStorage.setItem("token", token);   
    })
    // Reducer pour gérer le cas où l'authentification échoue
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
