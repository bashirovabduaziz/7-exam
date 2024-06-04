import React from 'react'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decCart, incCart, removeFromCart } from '../../context/cartSlice'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {
  const carts = useSelector(state => state.cart.value)
  const dispatch = useDispatch()
  

  let items = carts?.map((el) =>  <div key={el.id}>
      <button onClick={() => dispatch(removeFromCart(el))} className='cart__del'><FaTrashAlt /></button>
      <img src={el.images[0]} alt=""  width={80} height={80} className='cart__img'/>
      <p className='cart__title'>{el.title}</p>
  <h3 className='cart__price'>${el.price * el.quantity}</h3>
  <div className='cart__inc'>
  <button onClick={() => dispatch(incCart(el))} className='cart__plus'>+</button>
  <span className='cart__num'>{el.quantity}</span>
  <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))} className='cart__plus'>-</button>
  </div>
  <p className='cart__price'>${el.price}</p>

  </div>)
  return (
    <div>
      <Header />
     {items}
      Cart
      </div>
  )
}

export default Cart