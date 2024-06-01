import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Account from './pages/Account/Account'
import Address from './pages/Address/Address'
import Wishlist from './pages/Wishlist/Wishlist'
import './App.css'
import {data} from '../src/static/data.json'

const App = () => {
  return (
   <>
   <div>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />} />
      <Route path='/single-product/:id' element={<Single />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/address' element={<Address />}/>
      <Route path='/wishlist' element={<Wishlist />}/>
    </Routes>
   </div>
   </>
  )
}

export default App