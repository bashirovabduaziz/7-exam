import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ data }) => {
  const searchItems = data.map(el => (
    <div key={el.id}>
      <Link to={`/single-product/${el.id}`} className='flex items-center h-[40px] hover:bg-gray-200'>
        <img src={el.image_url} width={30} height={30} alt="" />
        <span className=''>{el.common_name}</span>
      </Link>
    </div>
  ));

  return (
    <div className='navbar-search-result'>
      {searchItems}
    </div>
  );
};

export default SearchResult;
