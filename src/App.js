import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';

import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Lounge from './components/Lounge';
// import Header from './components/Header';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exchange" element={<PrivateRoute />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/lounge" element={<Lounge />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}