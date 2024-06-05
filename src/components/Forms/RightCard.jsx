import React from 'react'
import { useState } from 'react';
import Payment from '../../assets/12.png'
import { useSelector } from 'react-redux';

const RightCard = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const carts = useSelector(state => state.cart.value);
    const calculateTotalPrice = () => {
      return carts.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const totalPrice = calculateTotalPrice();
  const discountedTotal = totalPrice * (1 - discount);

 
  return (
    <div>
     
    <div className='flex flex-col w-[300px]  gap-3 ml-[100px] mt-[20px]'>
    <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[400] text-[#3D3D3D]'>Subtotal</p>
                <p >${totalPrice.toFixed(2)}</p>
            </div>
            {discount > 0 ? (
    <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[400] text-[#3D3D3D]'>Coupon Discount</p>
        <p>(-) ${discountedTotal.toFixed(2)}</p>
    </div>
) : (
    <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[400] text-[#3D3D3D]'>Coupon Discount</p>
        <p>(-) $00.00</p>
    </div>
)}
            <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[400] text-[#3D3D3D]'>Shipping</p>
                <p>$16.00</p>
            </div>
            <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[600] text-[#3D3D3D]'>Total</p>
                <p className='font-[600] text-[#46A358]'>${(discountedTotal + 16).toFixed(2)}</p> 
            </div>
      <p className='font-[700] text-[#3D3D3D]'>Payment Method</p>
    <button className='border rounded-lg p-2 border-green-300 '>
    <label className='flex gap-3 font-medium items-center'>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
       <img src={Payment} width={500} alt="" />
      </label>
    </button>
    <button className='border rounded-lg p-2 border-green-300'>
    <label className='flex gap-3 font-medium items-center'>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
       <img src={Payment} width={500} alt="" />
    
      </label>
    </button>
   
     <button className='border rounded-lg p-2 border-green-300' >
     <label className='flex gap-3 font-medium items-center'>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
         <img src={Payment} width={500} alt="" />
      </label>
     </button>
     
    </div>


    </div>
  )
}

export default RightCard