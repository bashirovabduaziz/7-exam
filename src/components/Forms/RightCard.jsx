import React from 'react'
import { useState } from 'react';
import Payment from '../../assets/12.png'

const RightCard = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
    <div>
     
    <div className='flex flex-col w-[300px]  gap-3 ml-[100px] mt-[20px]'>
    <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[400] text-[#3D3D3D]'>Subtotal</p>
        <p>$2,683.00</p>
      </div>
      <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[400] text-[#3D3D3D]'>Subtotal</p>
        <p>(-) 00.00</p>
      </div>
      <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[400] text-[#3D3D3D]'>Subtotal</p>
        <p>$16.00</p>
      </div>
           <hr />
      <div className='flex items-center justify-between mt-[5px]'>
        
        <p className='font-[600] text-[#3D3D3D]'>Total</p>
        <p className='font-[600] text-[#46A358]'>$2,699.00</p>
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