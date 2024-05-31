import React, { useState } from 'react'
import './Carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from '@mui/material';


const Carousel = ({data}) => {
 const [slide,setSlide] = useState(0)
  
 const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

 
  return (
    <div className='carousel'>

        <div className='absolute mr-[600px]'>
          <p className='text-[rgba(61, 61, 61, 1)] text-[20px] font-[500]'>Welcome to GreenShop</p>
            <h1 className='text-[43px] font-[700] w-[350px] text-[rgba(61, 61, 61, 1)]'>Let’s Make a Better <span className='text-green-800'>Planet</span></h1>
           
            <Button variant="contained" className='button' color="success">SHOP NOW</Button>
        </div>
          <BsArrowLeftCircleFill  className="arrow arrow-left" onClick={prevSlide}  />
        {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx}   className={slide === idx ? "slide" : "slide slide-hidden"}/>
    })}
      <BsArrowRightCircleFill
       onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className='indicators'>
        {data.map((_,idx) => {
            return <button key={idx}   className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }  onClick={() => setSlide(idx)}></button>
        }) }
      </span>
    </div>
  )
}

export default Carousel