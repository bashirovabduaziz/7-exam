import React, { useState, useEffect } from 'react';
import axios from '../../api'
import Carts from '../../components/Carts/Carts';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { slides } from "../../static/static.json";
import Categories from '../../components/categories/Categories';

const YourComponent = () => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
   

  useEffect(()=>{
    axios
        .get("products")
        .then(res => {setData(res.data.products);setLoading(false)})
        .catch(res => console.log(res))
}, [])
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

    return (
        <div>
    <Header />
    <Carousel data={slides} />
    <div className='flex items-center justify-between mx-auto w-[1200px]  '>
              <Categories />
           <Carts data={data}  loading={loading} />
           </div>
        </div>
    );
};

export default YourComponent;
