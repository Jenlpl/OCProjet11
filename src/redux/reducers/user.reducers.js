import { createSlice } from "@reduxjs/toolkit";

import { fetchProfile, updateUsername } from "../actions/user.actions";

// Définition de l'état initial pour le slice "user"
const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // Gestion des cas de réussite et d'échec de la récupération du profil utilisateur
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      const { userName, firstName, lastName } = action.payload || {};
      state.userName = userName;
      state.firstName = firstName;
      state.lastName = lastName;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      console.error(action.error);
      state.error = action.error.message; 
    });
    // Gestion des cas de réussite et d'échec de la mise à jour du nom d'utilisateur
    builder.addCase(updateUsername.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
    });
    builder.addCase(updateUsername.rejected, (state, action) => {
      console.error(action.error);
      state.error = action.error.message;
    });
  }
});

export default userSlice.reducer;