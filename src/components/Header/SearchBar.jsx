import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import SearchResult from './SearchResult';
import { carts } from '../../static/data';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);

    if (searchValue) {
      const filtered = carts.filter((item) =>
        item.common_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div>
      <div className='input-wrapper'>
        <IoSearch id='search-icon' />
        <input
          type="text"
          placeholder='Find your plants'
          value={value}
          onChange={handleSearch}
        />
        {value && <SearchResult data={filteredData} />}
      </div>
    </div>
  );
};

export default SearchBar;
