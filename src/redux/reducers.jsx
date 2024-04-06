const initialState = {
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  console.log(state); // Place console.log before the return statement
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
