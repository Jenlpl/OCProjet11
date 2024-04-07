import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
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

