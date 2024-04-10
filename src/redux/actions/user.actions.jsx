import { createAsyncThunk } from "@reduxjs/toolkit";

// Action types
export const GET_USERPROFILE = "GET_USERPROFILE";
export const EDIT_USERNAME = "EDIT_USERNAME";

// Action creators
export const userProfile = (userProfile) => ({
  type: GET_USERPROFILE,
  payload: userProfile,
});

export const updateUsername = (userName) => ({
  type: EDIT_USERNAME,
  payload: userName,
});

// Thunk to fetch user profile
export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (token, { dispatch, rejectWithValue }) => {
    try {
      console.log('Fetching user profile...');
      const url = "http://localhost:3001/api/v1/user/profile";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const dataResponse = await response.json();
      const userProfile = dataResponse.body;
      console.log('User profile fetched:', userProfile);
      return userProfile;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return rejectWithValue(error.message);
    }
  }
);
