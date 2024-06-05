import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Chekout = () => {
    const carts = useSelector(state => state.cart.value);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const calculateTotalPrice = () => {
        return carts.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const totalPrice = calculateTotalPrice();
    const discountedTotal = totalPrice * (1 - discount);

    const handleCouponApply = () => {
        if (couponCode === 'Abduaziz') {
            setDiscount(0.5);
        } else {
            setDiscount(0);
        }
    };

    return (
        <div className='w-[300px] relative'>
            <p className='text-[#3D3D3D] font-[700] '>Cart Totals</p>
            <hr />
            <p className='mt-[5px]'>Coupon Apply</p>
            <div className='coupon-container flex'>
                <TextField
                    id="outlined-basic"
                    placeholder='Enter coupon code here...'
                    variant="outlined"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className='coupon-input'
                />
                <Button
                    color='success'
                    variant="contained"
                    onClick={handleCouponApply}
                    className='apply-button'
                >
                    Apply
                </Button>
            </div>
            <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[400] text-[#3D3D3D]'>Subtotal</p>
                <p >${totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-between mt-[10px]'>
    <p className='font-[400] text-[#3D3D3D]'>Coupon Discount</p>
    <p>(-) ${discount > 0 ? discountedTotal.toFixed(2) : '00.00'}</p>
</div>

            <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[400] text-[#3D3D3D]'>Shipping</p>
                <p>$16.00</p>
            </div>
            <div className='flex items-center justify-between mt-[10px]'>
                <p className='font-[600] text-[#3D3D3D]'>Total</p>
                <p className='font-[600] text-[#46A358]'>${(discountedTotal + 16).toFixed(2)}</p> {/* Added shipping to total */}
            </div>
            <Link to={'/checkout'} className=''>
                <Button variant="contained" className='top-[10px] w-[300px]' color="success">
                    Proceed To Checkout
                </Button>
            </Link>
        </div>
    );
}

export default Chekout;
