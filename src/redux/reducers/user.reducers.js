import {
    EDIT_USERNAME,
    GET_USERPROFILE,
    LOGOUT,
  } from "../actions/types.actions";
  
  const initialState = {
    status: "VOID",
    userProfile: "",
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERPROFILE:
        return {
          ...state,
          status: "SUCCEEDED",
          userProfile: action.payload,
        };
  
      case EDIT_USERNAME:
        const newProfile = { ...state.userProfile, userName: action.payload };
        return {
          ...state,
          status: "MODIFIED",
          userProfile: newProfile,
        };
      case LOGOUT: {
        return initialState;
      }
      default:
        return state;
    }
  };