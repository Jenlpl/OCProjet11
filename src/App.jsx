import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';
import Footer from './components/Footer';
import store from './redux/store';
import { fetchProfile } from './redux/actions/user.actions'; // Import fetchProfile thunk action

function App() {

  return (
    <Provider store={store}>
      <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </>
    </Provider>
  );
}

export default App;
