import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Home from './pages/Home/Home';
import Single from './pages/Single/Single';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Account from './pages/Account/Account';
import Address from './pages/Address/Address';
import Wishlist from './pages/Wishlist/Wishlist';
import './App.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const previousPath = sessionStorage.getItem('previousPath');
    const currentPath = location.pathname;

    // Check if navigating from login to home page
    if (previousPath === '/' && currentPath === '/home') {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }

    // Save current path as previous path for next navigation
    sessionStorage.setItem('previousPath', currentPath);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="spinner-container">
          <HashLoader color={"#36d7b7"} loading={loading} css={override} size={50} />
        </div>
      )}
      <div className={loading ? 'content hidden' : 'content'}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/single-product/:id' element={<Single />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/account' element={<Account />} />
          <Route path='/address' element={<Address />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
