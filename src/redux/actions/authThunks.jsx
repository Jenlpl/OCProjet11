import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    try {
      console.log('Attempting login with email:', email);
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );
      console.log('Login response data:', response.data);
      const jwtToken = response.data.body.token;
      console.log('JWT token:', jwtToken);

      // Store the token in local storage
      localStorage.setItem('jwtToken', jwtToken);

      return jwtToken;
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        const errorCode = error.response.status;
        console.log('Error code:', errorCode);
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


export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async () => {
    try {
      // Clear token from local storage
      localStorage.removeItem('jwtToken');
      return true; // Indicate successful logout
    } catch (error) {
      console.error('Error logging out:', error);
      throw new Error("Error logging out:", error);
    }
  }
);



