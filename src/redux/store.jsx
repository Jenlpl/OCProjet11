import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.reducers';
import userReducer from './reducers/user.reducers';

// Combinaison des reducers en un seul rootReducer
const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

// Configuration du store Redux avec le rootReducer et les outils de développement activés
const store = configureStore({
    reducer: rootReducer,         // Utilisation du rootReducer pour définir les reducers du store
    devTools: true                // Activation des outils de développement Redux dans le navigateur
})

export default store