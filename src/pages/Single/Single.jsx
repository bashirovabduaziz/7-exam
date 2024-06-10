import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Button, CircularProgress, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice";
import { FaRegHeart } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import { addToCart, removeFromCart, incCart, decCart } from '../../context/cartSlice'; // Import necessary actions
import Products from '../../components/Prouducts/Products';
import { carts } from '../../static/data';

const Single = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = carts.find(item => item.id === productId);
  const dispatch = useDispatch();
  const wishes = useSelector(state => state.wishlist.value);
  const cartsInStore = useSelector(state => state.cart.value);
  const [loading, setLoading] = useState(true);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);
  const [count, setCount] = useState(1); // Initialize count state

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    // Load cart from local storage when component mounts
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'cart/load', payload: JSON.parse(storedCart) });
    }
  }, []);

  useEffect(() => {
    // Update local storage when cart state changes
    localStorage.setItem('cart', JSON.stringify(cartsInStore));
  }, [cartsInStore]);

  useEffect(() => {
    // Update count when productInCart changes
    const productInCart = cartsInStore.find(item => item.id === productId);
    if (productInCart) {
      setCount(productInCart.quantity);
      setShowQuantityButtons(true);
    } else {
      setCount(1);
      setShowQuantityButtons(false);
    }
  }, [productId, cartsInStore]);

  const handleAddToCart = () => {
    const isInCart = cartsInStore.some(item => item.id === productId);

    if (isInCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      <Header />
      <div className='w-[1200px] mx-auto relative'>
        {
          loading ? (
            <div className='flex justify-center mt-[50px]'>
              <CircularProgress color="success" />
            </div>
          ) : (
            !product ? (
              <div className='flex justify-center mt-[50px]'>
                <p>Product not found</p>
              </div>
            ) : (
              <div className='w-[1200px] mx-auto flex items-center mt-[50px]'>
                <div>
                  <img src={product.image_url} alt={product.common_name} className='bg-clr w-[400px] h-[350px]' />
                </div>
                <div className='ml-[200px] w-[500px]'>
                  <p className='font-[700] text-[25px] text-[#3D3D3D]'>{product.common_name}</p>
                  <div className='flex justify-between mt-[10px]'>
                    <p className='font-[600] text-[18px] text-[#46A358]'>${product.price}</p>
                    <div className='flex items-center gap-[10px]'>
                      <Rating name="half-rating" defaultValue={4} precision={1} />
                      <p className='font-[500] text-[#3D3D3D]'>19 Customer Review</p>
                    </div>
                  </div>
                  <hr className='w-[500px]' />
                  <p className='mt-[10px] font-[500] text-[#3D3D3D]'>Short Description:</p>
                  <p className='w-[500px] font-[400] text-[#727272] mt-[10px]'>{product.description}</p>
                  <p className='mt-[10px] font-[500] text-[#3D3D3D]'>Size:</p>
                  <div className='flex space-x-4 mt-[10px]'>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>S</button>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>M</button>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>L</button>
                    <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>XL</button>
                  </div>
                  <div className='flex items-center gap-[20px]'>
                    {showQuantityButtons && (
                      <div className='flex items-center gap-[16px] mt-[10px]'>
                        <button
                          className='w-10 h-12 text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white'
                          onClick={() => dispatch(incCart(product))}
                        >
                          +
                        </button>
                        <p>{count}</p>
                        <button
                          disabled={count <= 1}
                          onClick={() => dispatch(decCart(product))}
                          className='w-10 h-12 text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white'
                        >
                          -
                        </button>
                      </div>
                    )}
                    <Link to={'/cart'} className='mt-[10px]'>
                      <Button variant="contained" color='success' >BUY NOW</Button>
                    </Link>
                    {
                      cartsInStore.some(w => w.id === product.id) ? (
                        <Button variant="outlined" color='error' className='uppercase cente' onClick={() => dispatch(removeFromCart(product))}>
                          Delete to cart
                        </Button>
                      ) : (
                        <Button variant="outlined" color='success' className='uppercase cente' onClick={handleAddToCart}>
                          Add to cart
                        </Button>
                      )
                    }
                    <button onClick={() => dispatch(toggleToWishes(product))} className='w-[40px] h-[40px] p-[4px] mt-[10px] rounded-[5px] border'>
                      {
                        wishes.some(w => w.id === product.id) ?
                          <FaRegHeart className='w-[30px] h-[20px] icons' /> :
                          <FaRegHeart className='w-[30px] h-[20px]' />
                      }
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        }
        <ProductDescription />
      </div>
      <div className='mx-auto max-w-7xl'>
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default Single;
