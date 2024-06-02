import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { CircularProgress, Skeleton } from '@mui/material';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice";
import {addToCart} from '../../context/cartSlice'

const Carts = ({ data, loading }) => {
  const dispatch = useDispatch()
  const wishes = useSelector(state => state.wishlist.value)

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentItems = data?.slice(offset, offset + itemsPerPage);

    return (
        <div>
            <div className='flex flex-wrap w-[700px]'>
            
            {loading ? (
              <div>
                <div className='flex flex-wrap ml-[20px] w-[700px] gap-[20px]'>
                  <div >
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                  <div>
                  <Skeleton variant="rectangular" width={210} height={118} />   
                <Skeleton animation="wave" />

                  </div>
                </div>
                <div className='ml-[20px] mt-[30px]'>                 <CircularProgress color="success" /> </div>

                 </div>
            ) : (
                <>
                  <div>
                <div>
                  <a href="#" className='items ml-[20px] font-[500] text-[17px]'>All Plants</a>
                  <a href="#" className='items ml-[20px] font-[500] text-[17px]'>New Arrivals</a>
                  <a href="#" className='items ml-[20px] font-[500] text-[17px]'>Sale</a>
                </div>
              </div>
                    <div className='flex flex-wrap ml-[20px] w-[700px]'>
                        {currentItems?.map((plant) => (
                            <div key={plant.id} className='mt-[40px] ml-[30px] product__cart'>
                               
                                    <img src={plant.images[0]} className='w-[180px] h-[200px] bg-clr  rounded-[5px]' alt={plant.title} />
                                    <div className="product__hiddens">
                                       <button className='product__like' onClick={()=> dispatch(toggleToWishes(plant))}>
                                       {
                wishes.some(w => w.id === plant.id) ?
                <FaHeart className='w-[30px] h-[20px] '/>:
                <FaRegHeart className='w-[30px] h-[20px]' />
            }


                                       </button>
                                       <button className='product__like' onClick={() => dispatch(addToCart(plant))} >
                                       <IoCartOutline className='w-[30px] h-[20px]' />
                                       </button>
                                       <Link to={`/single-product/${plant.id}`}>
                                       <button className='product__like' >
                                       <IoSearchOutline className='w-[30px] h-[20px]'  />
                                       </button>
                                </Link>

                                       
                                    </div>

                                    <h1 className='title font-[500] text-gray-600 mt-[20px]'>{plant.title}</h1>
                                    <p className='text-green-600 font-[600]'>${plant.price}</p>
                            </div>
                        ))}
                    </div>
                    <ReactPaginate
                    className='ml-[330px] flex mt-[50px] '
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(data?.length / itemsPerPage)}
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
                </>
            )}
        </div>
        </div>
    );
};

export default Carts;
