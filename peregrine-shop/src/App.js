import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shop';
import SignInSignUp from './pages/sign-in-sign-up/signInSignUp';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
