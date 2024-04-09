import { createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk";
import rootReducer from './reducers';
import { useSelector } from 'react-redux';

const initialState = {
  isAuthenticated: false,
  user: {
    firstName: null,
    // other user-related fields if needed
  },
  // Other initial state properties here
};


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
