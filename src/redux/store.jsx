import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducers';
import { userReducer } from './reducers/user.reducers';


const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store