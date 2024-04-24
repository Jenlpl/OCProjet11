import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Création d'une action asynchrone pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password, remember }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password, remember }
    );

    // Retourne les données de la réponse de la requête
    return { 
      token: response.data.body.token,
      remember
    };
  }
);
