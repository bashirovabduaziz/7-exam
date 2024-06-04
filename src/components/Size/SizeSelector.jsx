import React, { useState } from 'react';

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('S');

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="flex space-x-4 mt-10">
      {sizes.map(size => (
        <button
          key={size}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition 
            ${selectedSize === size ? 'bg-green-500 text-white border-green-500' : 'bg-white text-gray-500 border-gray-300'}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;