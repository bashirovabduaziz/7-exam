import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Button, CircularProgress, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice";
import { FaRegHeart } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import { addToCart } from '../../context/cartSlice';
import Products from '../../components/Prouducts/Products';

const Single = () => {
  const {id} = useParams()
  const [product,setProduct] = useState([])
  console.log(id);
  const [leading, setLeading] = useState(true)
  const [count , setCount] = useState(1)
  const dispatch = useDispatch()
  const wishes = useSelector(state => state.wishlist.value)
  const carts = useSelector(state => state.cart.value)

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
        setLeading(false);
      } catch (error) {
        console.error(error);
      }
    };

    setLeading(true); 
    fetchProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <Header />
      <div className='w-[1200px] mx-auto relative'>
        
      {
        leading ? ( 
         <div >
         <CircularProgress color="success" />
         </div>
        ) : (
          <div className='w-[1200px] mx-auto flex items-center  mt-[50px]'>
            <div>
            <img src={product?.thumbnail} alt="" className='bg-clr w-[400px] h-[350px]' />
            </div>
            <div className='ml-[200px] w-[500px] '>
              <p className=' font-[700] text-[25px] text-[#3D3D3D]'>{product?.title}</p>
              <div className='flex justify-between mt-[10px]'>
                <p className='font-[600] text-[18px] text-[#46A358]'>${product?.price}</p>
                <div className='flex items-center gap-[10px]'>
                <Rating name="half-rating" defaultValue={4} precision={1} />
                <p className='font-[500] text-[#3D3D3D] '>19 Customer Review</p>
                </div>
                
              </div>
              <hr className='w-[500px]' />
              <p className='mt-[10px] font-[500] text-[#3D3D3D]'>Short Description:</p>
              <p className='w-[500px] font-[400] text-[#727272] mt-[10px]'>{product?.description}</p>
              <p className='mt-[10px] font-[500] text-[#3D3D3D]'>Size:</p>
              <div className='flex space-x-4 mt-[10px]'>
                <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>S</button>
                <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>M</button>
                <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>L</button>
                <button className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] transition hover:border-[#46A358]'>XL</button>
                       
                     

              </div>
              <div className='flex items-center gap-[20px]'>
              <div className='flex items-center gap-[16px] mt-[10px]'>
                      
                      <button className='w-10 h-12  text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white' onClick={() => setCount(count + 1)}>+</button>
                      <p>{count}</p>
                      <button disabled={count <= 1} onClick={() => setCount(count - 1)} className='w-10 h-12 text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white'>-</button>
                      </div>
                      <Link to={'/cart'} className='mt-[10px]'><Button variant="contained"  color='success'>BUY NOW</Button></Link>

                      {
                          carts.some(w => w.id === product?.id) ?
                          
                          <Button variant="outlined"  color='error' className='uppercase cente'  onClick={() => dispatch(addToCart(product))} >Delete to cart</Button> :
                          <Button variant="outlined"  color='success' className='uppercase cente'  onClick={() => dispatch(addToCart(product))} >Add to cart</Button>
                      }
                    
                      
                      <button onClick={()=> dispatch(toggleToWishes(product))} className='w-[40px] h-[40px] p-[4px] mt-[10px] rounded-[5px] border '>
                      {
                wishes.some(w => w.id === product?.id) ?
                <FaRegHeart className='w-[30px] h-[20px] icons'/>:
                <FaRegHeart className='w-[30px] h-[20px] ' />
            }
                      </button>
            </div>
            </div>
            
          </div>
        )
         
        
      }
      <ProductDescription />
     
      </div>
      <div className='mx-auto max-w-7xl'>

<Products />
</div>
      <Footer />
    </div>
  )
}

export default Single