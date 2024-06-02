import React from 'react'
import group1 from '../../assets/mainimg/group1.png'
import group2 from '../../assets/mainimg/group2.png'
import group3 from '../../assets/mainimg/group3.png'
import { Button, TextField } from '@mui/material'
import logo from '../../assets/headerimg/Logo.svg'
import { FaLocationDot} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className="mt-[100px] h-[700px] bg-[#FBFBFB]">
      <div className="w-[1200px] mx-auto mt-[100px] ">
        <div className='flex items-center justify-between'>
        <img  src={group1} alt="" className='mt-[40px]'/>
        <div className='h-[150px] mt-[40px] w-[3px] bg-[#46A3581A]'></div>
        <img  src={group2} alt="" className="mt-[40px]" />
        <div className='h-[150px] mt-[40px] w-[3px] bg-[#46A3581A]'></div>
        <img  src={group3} alt="" className="mt-[40px]" />
        <div className='mt-[40px]'>
         <p className='font-[700] text-[18px] text-[#3D3D3D] '>Would you like to join newsletters?</p>
         <div className=' mt-[10px]'>
         <TextField id="outlined-basic" placeholder='enter your email address...' color='success'  variant="outlined" />
         <Button variant="contained" color="success" className='h-[55px] w-[100px]'>
  Join
</Button>

         </div>
         <p className='font-[500] text-[#727272] w-[354px] text-[15px] mt-[10px]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
        </div>
        </div>
      </div>
    <div className="h-[100px] bg-[#46A3581A] mt-[100px]">
      <div className='w-[1200px] mx-auto relative'>
        <div className='absolute top-[30px] flex items-center gap-[100px]'>    
               <img src={logo} alt=""   />
                 <div className=' gap-[10px] flex items-center ml-[30px]'>
                   <FaLocationDot className='icons' />
                   <p className='w-[200px]' >70 West Buckingham Ave. Farmingdale, NY 11735</p>

                 </div>
                  
                 <div className=' gap-[10px] flex items-center ml-[30px]'>
                   <MdEmail className='icons' />
                   <p className='w-[200px]' >contact@greenshop.com</p>

                 </div>
                 <div className=' gap-[10px] flex items-center ml-[30px]'>
                   <FaPhoneAlt  className='icons' />
                   <p className='w-[200px]' >7+88 01911 717 490</p>

                 </div>
               </div>

      </div>
    </div>
    <div className=""></div>
    </div>
  )
}

export default Footer