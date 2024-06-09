import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { CircularProgress, Skeleton } from '@mui/material';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from '../../context/cartSlice';
import { carts } from '../../static/data'; 
const Carts = () => {
  const dispatch = useDispatch();
  const wishes = useSelector(state => state.wishlist.value);
  const cartsData = useSelector(state => state.cart.value);

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = () => {
      setData(carts);
      const categories = [...new Set(carts.map(item => item.category))];
      setCategories(categories);
    };

    fetchData();

  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0); 
  };

  const filteredData = selectedCategory === 'all' ? data : data.filter(item => item.category === selectedCategory);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredData.slice(offset, offset + itemsPerPage);

  return (
    <div>
      {loading ? (
        <div className='flex flex-col items-center'>
          <div className='flex flex-wrap ml-[20px] w-[700px] gap-[20px]'>
            {[...Array(9)].map((_, index) => (
              <div key={index}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" />
              </div>
            ))}
          </div>
          <div className='ml-[20px] mt-[30px]'>
            <CircularProgress color="success" />
          </div>
        </div>
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <div>
              <a href="#" className='items ml-[20px] font-[500] text-[17px]'>All Plants</a>
              <a href="#" className='items ml-[20px] font-[500] text-[17px]'>New Arrivals</a>
              <a href="#" className='items ml-[20px] font-[500] text-[17px]'>Sale</a>
            </div>
            <select 
              value={selectedCategory} 
              onChange={handleCategoryChange} 
              className='ml-[20px] font-[500] text-[17px] p-2 text-green-600 bg-white'>
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-wrap w-[700px]'>
            <div className='flex flex-wrap ml-[20px] w-[700px]'>
              {currentItems.map((plant) => (
                <div key={plant.id} className='mt-[40px] ml-[30px] product__cart'>
                  <div className=''>
                  <img src={plant.image_url} className='w-[180px] h-[200px] bg-clr img-carts rounded-[5px] ' alt={plant.common_name} />
                  </div>
                  <div className="product__hiddens">

                    <button className='product__like' onClick={() => dispatch(toggleToWishes(plant))}>
                      {wishes.some(w => w.id === plant.id) ? (
                        <FaHeart className='w-[30px] h-[20px] icons' />
                      ) : (
                        <FaRegHeart className='w-[30px] h-[20px]' />
                      )}
                    </button>
                    <button className='product__like' onClick={() => dispatch(addToCart(plant))}>
                      {cartsData.some(w => w.id === plant.id) ? (
                        <IoCartOutline className='icons w-[30px] h-[20px]' />
                      ) : (
                        <IoCartOutline className='w-[30px] h-[20px]' />
                      )}
                    </button>
                    <Link to={`/single-product/${plant.id}`}>
                      <button className='product__like'>
                        <IoSearchOutline className='w-[30px] h-[20px]' />
                      </button>
                    </Link>
                  </div>
                  <h1 className='title font-[500] text-gray-600 mt-[20px]'>{plant.common_name}</h1>
                  <p className='text-green-600 font-[600]'>${plant.price}</p>
                </div>
              ))}
            </div>
            {filteredData.length > itemsPerPage && (
              <ReactPaginate
                className='ml-[330px] flex mt-[50px]'
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination flex justify-center mt-4"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link py-2 px-4 border border-gray-300 rounded-[5px] mx-1"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link py-2 px-4 border border-gray-300 rounded-[5px] mx-1"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link py-2 px-4 border border-gray-300 rounded-[5px] mx-1"}
                activeClassName={"active"}
                activeLinkClassName={"bg-green-500 text-white"}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Carts;
