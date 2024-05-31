import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/headerimg/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import {  IoCartOutline  } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Button } from '@mui/material';
import { ImExit } from "react-icons/im";
import SearchBar from './SearchBar';





const Header = () => {
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
                <Link to={'/wishlist'} className='link'>
                  <FaRegHeart className='w-[30px] h-[20px]' />
                  </Link>
                   
                  <Link to={'/cart'} className='link'><IoCartOutline className='w-[30px] h-[20px]' /></Link>
                  <Link to={'/'}><Button variant="contained" className='bg-green-700' color="success">Login <ImExit className='ml-2' /></Button></Link>
               </div>
          </div>  
          <hr className='mt-7'/>
    </div>
  )
}

export default Header