const GET_USERPROFILE = "GET_USER_PROFILE"

  const initialState = {
    status: "VOID",
    userProfile: {}, // Initialize as an empty object
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERPROFILE:
        return {
          ...state,
          status: "SUCCEEDED",
          userProfile: action.payload,
        };
  
      
      default:
        return state;
    }
  };