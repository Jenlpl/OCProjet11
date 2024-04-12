import { EDIT_USERNAME, GET_USERPROFILE } from "./types.actions";

export const userProfile = (userProfile) => {
  return {
    type: GET_USERPROFILE,
    payload: userProfile,
  };
};

export const updateUsername = (userName) => {
  return {
    type: EDIT_USERNAME,
    payload: userName,
  };
};

export function fetchProfile(token) {
  return async (dispatch) => {
    if (token) {
      try {
        const url = "http://localhost:3001/api/v1/user/profile";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const dataResponse = await response.json();
        switch (dataResponse.status) {
          case 401:
            localStorage.removeItem("token");
            console.log("token expiré");
          case 200:
            const userprofile = dataResponse.body;
            dispatch(userProfile(userprofile));
            break;
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("token inexistant");
    }
  };
}
export function fetchupdateUserName(token, username) {
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
      console.log(dataResponse);
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