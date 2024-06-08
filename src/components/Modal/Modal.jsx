import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { clearCart } from '../../context/cartSlice';
import { carts } from '../../static/data';


function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.value)
  const dispatch = useDispatch();


  let items = cartItems?.map((el,id) => <div className='w-[350px] flex items-center justify-around bg-clr mt-[10px] '>
     <img src={el.image_url} alt=""   className='w-[50px] h-[50px]'/>
     <p className='titless font-[500] text-[#3D3D3D]'>{el.common_name}</p>
     <p className='font-[500] '>(x{el.quantity})</p>
     <h3 className='w-[50px] price'>${el.price * el.quantity}</h3>
  </div>)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-[#46A358] text-white rounded w-[300px] mt-[20px] ml-[100px]"
      >
        Place Order
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal" >
              
          <div className="bg-white w-[420px] max-h-[400px] h-auto p-[25px] rounded   modal overflow-auto">
          <button
              onClick={closeModal}
              className='text-[20px] text-[#46A358] ml-[335px]'
            >
             <IoMdClose />
            </button>
          <div className='flex items-center mt-[20px] justify-between w-[350px] '>
            <p className='text-[#3D3D3D] font-[500]'>Products</p>
            <div className=' flex items-center w-[125px] justify-between'>

              <p className='text-[#3D3D3D] font-[500]'>Qty</p>
              <p className='text-[#3D3D3D] font-[500]'>Subtotal</p>
            </div>
            
          </div>
          <hr className='w-[350px]' />
                 {items}
           <Link to={'/home'}>
           <button
             onClick={() => dispatch(clearCart())} 
              className=" px-4 py-2 w-[350px] mt-[20px] bg-[#46A358] text-white rounded "
            >
             Track your order
            </button>
           </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
