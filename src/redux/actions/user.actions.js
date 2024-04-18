import { createAsyncThunk } from "@reduxjs/toolkit";

// Action asynchrone pour récupérer le profil de l'utilisateur
export const fetchProfile = createAsyncThunk("user/profile", async (token) => {
    const url = "http://localhost:3001/api/v1/user/profile";
    const response = await fetch(url, {                  // Effectue une requête HTTP POST pour récupérer le profil
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.body;
});

// Action asynchrone pour mettre à jour le nom d'utilisateur
export const updateUsername = createAsyncThunk("user/update", async({ userName, token}) => {
      const url = "http://localhost:3001/api/v1/user/profile";
      const response = await fetch(url, {           // Effectue une requête HTTP POST pour récupérer le profil
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,         // Ajoute le token d'authentification dans les en-têtes de la requête  
        },
        body: JSON.stringify({ userName }),         // Corps de la requête contenant le nouveau nom d'utilisateur
      });
      return userName;
});