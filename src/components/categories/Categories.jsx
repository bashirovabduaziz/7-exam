import { Button, Slider } from '@mui/material'
import React from 'react'
import Sale from '../../assets/mainimg/Sale.png'

const Categories = () => {
  return (
    <div className='bg-clr h-[1200px] w-[300px] mt-[30px] rounded-[3px] overflow-hidden ml-[50px]'>
        <ul>
            <li className="">
                <h1 className='text-[#3D3D3D] text-[20px] font-[600] mt-[10px] ml-[20px]'>Categories</h1>
                <p className="text-[#46A358] font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>House Plants</span><span className="">(33)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Potter Plants</span><span className="">(12)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Seeds</span> <span className="">(65)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Small Plants</span><span className="">(39)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Big Plants</span><span className="">(23)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Succulents</span><span className="">(17)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Trerraiums</span><span className="">(19)</span></p>
                <p className='font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]'><span className='w-[200px]'>Gardening</span><span className="">(13)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Accessories</span><span className="">(18)</span></p>
            </li>
            <li className="">
            <h1 className='text-[#3D3D3D] text-[20px] font-[600] mt-[30px] ml-[20px]'>Price Range</h1>
                    <div className='w-[200px] ml-[30px] mt-[20px]'>
                    <Slider defaultValue={50} color="success" aria-label="Default" valueLabelDisplay="auto" />
                    </div>
                    <h1 className='font-[400] ml-[30px] mt-[10px]'>Price:<span className='font-[600] text-[#46A358] text-[18px] ml-[10px]'>$39-$1230</span></h1>
                    <div className='ml-[30px] mt-[20px]'>
                    <Button variant="contained"  color="success">Filter</Button>
                    </div>
                    <h1 className='text-[#3D3D3D] text-[20px] font-[600] mt-[30px] ml-[20px]'>Size</h1>
                <p className=" font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>House Plants</span><span className="">(33)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Potter Plants</span><span className="">(12)</span></p>
                <p className="font-[500] text-[17px] gap-[20px] flex ml-[30px] mt-[20px]"><span className='w-[200px]'>Seeds</span> <span className="">(65)</span></p>

            </li>
            <li className="">
                <img src={Sale} className='mt-[15px] h-[300px] w-[300px]' alt="" />
            </li>
        </ul>
    </div>
  )
}

export default Categories