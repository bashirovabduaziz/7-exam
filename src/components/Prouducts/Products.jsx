import React, { useEffect, useState } from 'react';
import axios from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from '../../context/cartSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgress } from '@mui/material';
import './carousel.css'; // Import custom CSS

const Products = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const wishes = useSelector(state => state.wishlist.value);
    const carts = useSelector(state => state.cart.value);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("products")
            .then(res => { setData(res.data.products); setLoading(false); })
            .catch(res => console.log(res));
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 20
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };

    const products = data?.map((el) =>
        <div key={el.id} className='mt-[40px] ml-[30px]  product__cart h-[300px]  '>
            <img src={el.images[0]} className='w-[180px] h-[200px] bg-clr  rounded-[5px]' alt={el.title} />
            <div className="product__hiddens">
                <button className='product__like' onClick={() => dispatch(toggleToWishes(el))}>
                    {
                        wishes.some(w => w.id === el.id) ?
                            <FaRegHeart className='w-[30px] h-[20px] icons' /> :
                            <FaRegHeart className='w-[30px] h-[20px]' />
                    }
                </button>
                <button className='product__like' onClick={() => dispatch(addToCart(el))} >
                    {
                        carts.some(w => w.id === el.id) ?
                            <IoCartOutline className='icons w-[30px] h-[20px]' /> :
                            <IoCartOutline className='w-[30px] h-[20px]' />
                    }
                </button>
                <Link to={`/single-product/${el.id}`}>
                    <button className='product__like' >
                        <IoSearchOutline className='w-[30px] h-[20px]' />
                    </button>
                </Link>
            </div>
            <h1 className='title font-[500] text-gray-600 mt-[20px]'>{el.title}</h1>
            <p className='text-green-600 font-[600]'>${el.price}</p>
        </div>
    );

    return (
        <div className="carousel-container mt-[100px]">
            {loading ? (
                <CircularProgress color="success" />
            ) : (
                <div>
                    <h1 className='font-[600] text-[#46A358]'>Related Products</h1>
                    <hr className='mt-[10px]'/>
                    <Carousel 
                        className='mt-[20px] ml-[10px] custom-carousel'
                        responsive={responsive} 
                        itemClass="carousel-item-padding-20-px" 
                        autoPlay={true} 
                        autoPlaySpeed={1500} 
                        infinite={true} 
                        transitionDuration={500}
                    >
                        {products}
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default Products;
