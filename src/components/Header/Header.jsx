import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/headerimg/Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Button } from '@mui/material';
import { ImExit } from 'react-icons/im';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const carts = useSelector(state => state.cart.value);
  const wishes = useSelector(state => state.wishlist.value);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-5">
        <img src={logo} alt="" className="w-[150px]" />
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex gap-7 mt-4 sm:mt-0`}
        >
          <li className="font-[500] text-[rgba(61, 61, 61, 1)]">
            <NavLink to={'/home'}>Home</NavLink>
          </li>
          <li className="font-[500] text-[rgba(61, 61, 61, 1)]">
            <NavLink to={'/cart'}>Shop</NavLink>
          </li>
          <li className="font-[500] text-[rgba(61, 61, 61, 1)]">
            <NavLink to={'/address'}>Plant Care</NavLink>
          </li>
          <li className="font-[500] text-[rgba(61, 61, 61, 1)]">
            <NavLink to={'/account'}>Blogs</NavLink>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <Link to={'/wishlist'} className="link flex relative">
            <IoMdHeartEmpty className="w-[30px] h-[30px]" />
            <sup className="w-[15px] h-[15px] right-[10px] mt-[3px] text-[10px] mr rounded-full flex items-center justify-center bg-[#46A358] transition text-white">
              {wishes.length}
            </sup>
          </Link>

          <Link to={'/cart'} className="link flex relative">
            <IoCartOutline className="w-[40px] h-[30px]" />
            <sup className="w-[15px] h-[15px] text-[10px] mr rounded-full flex items-center justify-center right-[15px] mt-[3px] bg-[#46A358] transition text-white">
              {carts.length}
            </sup>{' '}
          </Link>
          <Link to={'/'}>
            <Button variant="contained" className="bg-green-700" color="success">
              <ImExit className="w-6 h-6" /> Login
            </Button>
          </Link>
        </div>
      </div>
      <hr  />
    </div>
  );
};

export default Header;
