import React, { useEffect, useState }  from 'react'
import { IoSearch } from 'react-icons/io5'
import SearchResult from './SearchResult';
import axios from '../../api'

const SearchBar = () => {
const [value,setValue] = useState('')
const [data,setData] = useState(null)

console.log(value);
useEffect(()=>{
    axios
        .get(`products/search?q=${value}`)
        .then(res => setData(res.data.products))
        .catch(err=> console.log(err))
}, [value])

  return (
    <div>
    <div className='input-wrapper'>
        <IoSearch id='search-icon' />
        <input type="text" placeholder='Find your plants' value={value} onChange={e => setValue(e.target.value)} />
        {
            value?
           <SearchResult data={data} /> :
         <></>
        }
    </div>
    </div>
  )
}

export default SearchBar