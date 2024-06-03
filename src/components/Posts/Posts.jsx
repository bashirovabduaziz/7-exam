import React from 'react'
import Foto1 from '../../assets/mainimg/01.png'
import Foto2 from '../../assets/mainimg/022.png'
import Foto3 from '../../assets/mainimg/03.png'

const Posts = () => {
  return (
    <div>
        <div className='w-[1200px] mx-auto mt-[100px]'>
            <h1 className='font-[700] text-[#3D3D3D] text-center text-[28px]'>Our Blog Posts</h1>
            <p className='text-[#727272] text-center mt-[20px]'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className='mt-[40px] flex items-center justify-around'>
                <div className='cen w-[280px] h-[420px]'>
                      <img src={Foto1} alt=""  width={280}/>
                      <div className='mt-[10px] ml-[20px]'>
                      <p className='text-[#46A358] font-[500] '>September 12  I Read in 6 minutes</p>
                      <p className='text-[20px] font-[700] text-[#3D3D3D] w-[220px] mt-[10px]'>Cactus & Succulent Care Tips</p>
                      <p className='text-[#727272] font-[400] w-[240px] mt-[10px]'>Cacti are succulents are easy care plants for any home or patio.</p>
                      <a href="#" className='font-[500] text-[#3D3D3D]'>Read More</a>
                      </div>
                </div>
                <div className='cen w-[280px] h-[420px]'>
                      <img src={Foto2} alt=""  width={280}/>
                      <div className='mt-[10px] ml-[20px]'>
                      <p className='text-[#46A358] font-[500] '>September 13 I Read in 2 minutes</p>
                      <p className='text-[20px] font-[700] text-[#3D3D3D] w-[220px] mt-[10px]'>Top 10 Succulents for Your Home</p>
                      <p className='text-[#727272] font-[400] w-[240px] mt-[10px]'>Best in hanging baskets. Prefers medium to high light.</p>
                      <a href="#" className='font-[500] text-[#3D3D3D]'>Read More</a>
                      </div>
                </div>
                <div className='cen w-[280px] h-[420px]'>
                      <img src={Foto3} alt=""  width={280}/>
                      <div className='mt-[10px] ml-[20px]'>
                      <p className='text-[#46A358] font-[500] '>September 15 I Read in 3 minutes</p>
                      <p className='text-[20px] font-[700] text-[#3D3D3D] w-[220px] mt-[10px]'>Cactus & Succulent Care Tips</p>
                      <p className='text-[#727272] font-[400] w-[240px] mt-[10px]'>Cacti are succulents are easy care plants for any home or patio.</p>
                      <a href="#" className='font-[500] text-[#3D3D3D]'>Read More</a>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts