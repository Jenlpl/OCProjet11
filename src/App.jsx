// App.jsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';
import Footer from './components/Footer';
import store from './redux/store';

function App() {
  const [isUserConnected, setUserConnected] = useState(!!localStorage.getItem('jwtToken'));

  const updateHeaderState = () => {
    setUserConnected(!!localStorage.getItem('jwtToken'));
  };

  return (
    <Provider store={store}>
      <>
        <Header isUserConnected={isUserConnected} updateHeaderState={updateHeaderState} />
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
