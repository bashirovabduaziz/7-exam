import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Chekout = () => {
  return (
    <div className='w-[220px] relative'>
      <p className='text-[#3D3D3D] font-[700] '>Cart Totals</p>
      <hr />
      <p className='mt-[5px]'>Coupon Apply</p>
      <TextField id="outlined-basic" placeholder='Enter coupon code here...' className='top-[5px]' color='success'  variant="outlined" />
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

      <div className='flex items-center justify-between mt-[10px]'>
        <p className='font-[600] text-[#3D3D3D]'>Total</p>
        <p className='font-[600] text-[#46A358]'>$2,699.00</p>
      </div>
     <Link to={'/checkout'} className=''>
     <Button variant="contained"  className=' top-[10px] w-[220px]' color="success">
     Proceed To Checkout
</Button>
     </Link>
    </div>
  )
}

export default Chekout