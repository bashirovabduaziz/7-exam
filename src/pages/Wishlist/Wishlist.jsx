import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header/Header';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toggleToWishes } from "../../context/wishlistSlice";



const Wishlist = () => {
  const dispatch = useDispatch()

  const wishes = useSelector(state => state.wishlist.value)
  console.log(wishes);
  let wish = wishes?.map((wish) => <div key={wish.id} className='mt-[40px] ml-[30px] product__cart'>
    
                               
                               <img src={wish.images[0]} className='w-[180px] h-[200px] bg-clr  rounded-[5px]' alt={wish.title} />
                               <div className="product__hiddens">
                                  <button className='product__like' onClick={()=> dispatch(toggleToWishes(wish))}>

              {
                wishes.some(w => w.id === wish.id) ?
                <FaRegHeart className='w-[30px] h-[20px] icons'/>:
                <FaRegHeart className='w-[30px] h-[20px]' />
            }

                                  </button>
                                  <button className='product__like' onClick={() => dispatch(addToCart(wish))} >
                                  <IoCartOutline className='w-[30px] h-[20px]' />
                                  </button>
                                  <Link to={`/single-product/${wish.id}`}>
                                  <button className='product__like' >
                                  <IoSearchOutline className='w-[30px] h-[20px]'  />
                                  </button>
                           </Link>

                                  
                               </div>

                               <h1 className='title font-[500] text-gray-600 mt-[20px]'>{wish.title}</h1>
                               <p className='text-green-600 font-[600]'>${wish.price}</p>
                       </div>
 )
  return (
    <>
    <div className='wishlist'>
      <Header />
      {
        wishes.length ? 
        <div className='mx-auto w-[1200px] flex items-center flex-wrap '>{wish}</div>
        

        :
        <h2>Empty</h2>
        
      }
      
      </div>
    </>
  )
}

export default Wishlist