import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from './Home/Home';
import Signin from './Signin/Signin';
import User from './User/User';
import Footer from '../components/Footer';

function App() {
  return (  
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="*" element={<Error />} />  */}
      </Routes>
      <Footer />
      </>
  );
}

export default App;
