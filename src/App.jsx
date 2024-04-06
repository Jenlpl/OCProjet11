import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import User from './pages/User/User';
import Footer from './components/Footer';
import store from './redux/store'; // Import your Redux store

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
