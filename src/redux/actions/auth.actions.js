import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password, remember }) => {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      { email, password }
    );

    return { 
      token: response.data.body.token,
      remember
    };
  }
);
