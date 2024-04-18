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
    return await response.json();
});


export function updateUsername(token, username) {
  return async (dispatch) => {
    try {
      const url = "http://localhost:3001/api/v1/user/profile";
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName: username,
        }),
      });

      const dataResponse = await response.json();
      switch (dataResponse.status) {
        case 200:
          dispatch(updateUsername(username));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };
}