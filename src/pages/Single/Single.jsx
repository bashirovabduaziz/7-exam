import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Single = () => {
  const {id} = useParams()
  const [product,setProduct] = useState([])
  console.log(id);
  const [leading, setLeading] = useState(true)

  useEffect(()=> {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res => {setProduct(res.data);setLeading(false)})
    .catch(res => console.log(res))
},[])
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <div>
      <Header />
      {
        leading ? ( 
          <h1>...Loading</h1>
        ) : (
          <div>
            <img src={product?.thumbnail} alt="" />
          </div>
        )
         
        
      }
    </div>
  )
}

export default Single