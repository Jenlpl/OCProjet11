import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Action asynchrone pour authentifier un utilisateur.
 * Utilise la méthode `loginUser` pour envoyer une requête d'authentification.
 * Si la requête réussit, retourne le token d'authentification.
 */
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email: email,
          password: password, }
      );
      const jwtToken = response.data.body.token;
      return jwtToken;
    } catch (error) {
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

/**
 * Action asynchrone pour récupérer le profil d'un utilisateur.
 * Utilise la méthode `getUserProfile` pour envoyer une requête pour les données de profil de l'utilisateur.
 * Si la requête réussit, retourne les données du profil de l'utilisateur associé à ce token
 */
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.body;
    } catch (error) {
      throw new Error("Error fetching user profile:", error);
    }
  }
);

/**
 * Action asynchrone pour mettre à jour le profil d'un utilisateur.
 * Utilise la méthode `updateUserProfile` pour envoyer une requête de mise à jour du profil de l'utilisateur.
 * Si la requête réussit, retourne les données du profil mis à jour de l'utilisateur
 * En cas d'erreur, rejette la promesse avec le message d'erreur.
 */
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, updatedProfile }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        updatedProfile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.body;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
