import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk("user/profile", async (token) => {
    const url = "http://localhost:3001/api/v1/user/profile";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.body;
});


export const updateUsername = createAsyncThunk("user/update", async({ userName, token}) => {
      const url = "http://localhost:3001/api/v1/user/profile";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });
      return username;
});