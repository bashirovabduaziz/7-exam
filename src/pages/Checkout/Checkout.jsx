import React from 'react'
import Header from '../../components/Header/Header'
import {  useSelector } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import FormHook from '../../components/Forms/FormHook'
import RightCard from '../../components/Forms/RightCard'
import Modal from '../../components/Modal/Modal'
import { carts } from '../../static/data';


const Checkout = () => {
  const cartItems = useSelector(state => state.cart.value)

  let items = cartItems?.map((el , id) => <div  className='w-[400px] flex items-center justify-around bg-clr mt-[5px] '>
     <img src={el.image_url} alt=""   className='w-[50px] h-[50px]'/>
     <p className='titles font-[500] text-[#3D3D3D]'>{el.common_name}</p>
     <p className='font-[500] '>(x{el.quantity})</p>
     <h3 className='w-[50px] price'>${el.price * el.quantity}</h3>
  </div>)
  return (
    <div className=''>
      <Header />
      <div className='w-[1200px] mx-auto flex justify-between mt-[50px]'>
       
          <div>
            <h1 className='font-[700]  text-[#3D3D3D]'>Billing Address</h1>
            <FormHook />
          </div>
          <div>
            <h1 className='font-[700]  text-[#3D3D3D]'>Your Order</h1>
            <div className='w-[400px]'>
              <div className='flex items-center justify-between mt-[10px]'>
                <h1 className='font-[600] text-[#3D3D3D]'>Products</h1>
                <h1 className='font-[600] text-[#3D3D3D]'>Subtotal</h1>
               
              </div>
              <hr className='mt-[10px]' />
              <div className='mt-[20px]'>
            {items}
           
            </div>
            <RightCard />
            <Modal />
            </div>
           
          </div>
      </div>
     
       <Footer />
      </div>
  )
}

export default Checkout