import React from 'react'
import { Link } from 'react-router-dom'


const Carts = ({data,loading}) => {
    let plants = data?.map((plants) => <div key={plants.id}>
       <Link to={`/single-product/${plants.id}`}>
        <h1>{plants.title}</h1>
        </Link>
    </div>)
  return (
    <div>{plants}</div>
  )
}

export default Carts