// App.jsx
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';
import Footer from './components/Footer';
import store from './redux/store';
import { fetchUserData } from './redux/authThunks'; // Import fetchUserData thunk action

function App() {
  const [isUserConnected, setUserConnected] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // User is connected, fetch user data
      setUserConnected(true);
      // Dispatch action to fetch user data
      store.dispatch(fetchUserData())
        .then((userData) => {
          // Assuming userData contains the user's information including first name
          setUserFirstName(userData.firstName);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []); // Run once on component mount

  const updateHeaderState = () => {
    setUserConnected(!!localStorage.getItem('jwtToken'));
  };

  return (
    <Provider store={store}>
      <>
        <Header isUserConnected={isUserConnected} firstName={userFirstName} updateHeaderState={updateHeaderState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin updateHeaderState={updateHeaderState} />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
}

export default App;
