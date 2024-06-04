import React from 'react'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decCart, incCart, removeFromCart } from '../../context/cartSlice'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Products from '../../components/Prouducts/Products'
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  const carts = useSelector(state => state.cart.value)
  const dispatch = useDispatch()
  

  let items = carts?.map((el) =>  <div key={el.id} className='w-[700px] flex items-center justify-around bg-clr mt-[30px] rounded-[5px]'>
      <img src={el.images[0]} alt=""   className='w-[80px] h-[80px]'/>
      <Link to={`/single-product/${el.id}`}>
      <p className='titles font-[500] text-[#3D3D3D]'>{el.title}</p>
      </Link>
  <p className='w-[50px]'>${el.price}</p>

  <div className='flex items-center gap-[10px]'>

  <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))} className='w-[40px] h-[40px] text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white'>-</button>
  <span className=''>{el.quantity}</span>
  <button  onClick={() => dispatch(incCart(el))} className='w-[40px] h-[40px] text-[23px] rounded-full flex items-center justify-center bg-[#46A358] transition text-white'>+</button>
  </div>
  <h3 className='w-[50px] price'>${el.price * el.quantity}</h3>
  <button onClick={() => dispatch(removeFromCart(el))} className='icons'><FaTrashAlt /></button>
    
  </div>)
  return (
    <div>
      <Header />
      <div className='mx-auto flex items-center justify-between w-[1200px]'>
      {
        carts.length ? 
        <div className=' '>{items}</div>
        

        :
        <div className='product__card'>
          <img src="https://png.pngtree.com/png-vector/20190719/ourmid/pngtree-empty-box-icon-for-your-project-png-image_1548720.jpg" alt="" />
        <h2 className='text-[30px] font-[700] text-[#46A358]'>Empty</h2>
        </div>
      }
      
      </div>
      <div className='mx-auto max-w-7xl'>
      <Products />
      </div>
       <Footer />
      </div>
  )
}

export default Cart