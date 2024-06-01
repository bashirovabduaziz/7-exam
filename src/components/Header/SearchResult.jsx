import React from 'react'
import { Link } from 'react-router-dom'


const SearchResult = ({data}) => {
       let searchItems = data?.map(el =>  <div key={el.id} >
        <Link to={`/single-product/${el.id}`} className='flex items-center w-[200px] h-[40px]'>
            <img src={el.images[0]} width={30} height={30} alt="" />
        <span className='search-title'>{el.title}</span>
        </Link>
       </div>)
    return (
    <div className='navbar-search-result'>
          {searchItems}
        </div>
  )
}

export default SearchResult