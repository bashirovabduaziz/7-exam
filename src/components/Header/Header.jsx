import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/headerimg/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import {  IoCartOutline  } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button } from '@mui/material';
import { ImExit } from "react-icons/im";
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';





const Header = () => {
  const carts = useSelector(state => state.cart.value)
  const wishes = useSelector(state => state.wishlist.value)


  return (  
    <div>
         <div className='flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-5'>
          <img src={logo} alt="" />
          <ul className='flex gap-7'>
            <li className="font-[500] text-[rgba(61, 61, 61, 1)]"><NavLink to={'/home'}>Home</NavLink></li>
            <li className="font-[500] text-[rgba(61, 61, 61, 1)]"><NavLink to={'/cart'}>Shop</NavLink></li>
            <li className="font-[500] text-[rgba(61, 61, 61, 1)]"><NavLink to={'/address'}>Plant Care</NavLink></li>
            <li className="font-[500] text-[rgba(61, 61, 61, 1)]"><NavLink to={'/account'}>Blogs</NavLink></li>
          </ul>
               <div className='flex gap-3 items-center'>
               <div className="search-bar-container">
               <SearchBar  />
       
               </div>
                <Link to={'/wishlist'} className='link flex relative'>
                  <IoMdHeartEmpty className='w-[30px] h-[30px]' />
                  <sup className='w-[15px] h-[15px] right-[10px] mt-[3px]  text-[10px] mr rounded-full flex items-center justify-center bg-[#46A358] transition text-white'>{wishes.length}</sup>
                  </Link>
                   
                  <Link to={'/cart'} className='link flex relative'><IoCartOutline className='w-[40px] h-[30px]' /> <sup className='w-[15px] h-[15px]  text-[10px] mr rounded-full flex items-center justify-center right-[15px] mt-[3px] bg-[#46A358] transition text-white'>{carts.length}</sup> </Link>
                  <Link to={'/'}><Button variant="contained" className='bg-green-700' color="success">Login <ImExit className='ml-2' /></Button></Link>
               </div>
          </div>  
          <hr className='mt-7'/>
    </div>
  )
}

export default Header