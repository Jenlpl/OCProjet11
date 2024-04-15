import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password, remember }) => {
    console.log("Attempting login with email:", email);
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password }
    );
    console.log("Login response data:", response.data);
    // Get the token:
    return { 
      token: response.data.body.token,
      remember
    };
  }
);
