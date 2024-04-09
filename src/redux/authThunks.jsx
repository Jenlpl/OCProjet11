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


export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { getState }) => {
    try {
      const token = getState().auth.token; // Access token from auth slice
      const response = await axios.put("http://localhost:3001/api/v1/user/profile", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetch user data response:", response); // Log the entire response
      console.log("User first name:", response.data.firstName); // Log the user's first name from the response
      
      // Assuming the response contains user data including first name
      const { firstName } = response.data; // Adjust this according to your server response
      
      // Dispatch an action to update the user's first name in the Redux store
      // This assumes you have a Redux action called setUserFirstName or something similar
      store.dispatch(setUserFirstName(firstName)); // Dispatch action to set user's first name

      return response.data; // Return the entire response data
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);
