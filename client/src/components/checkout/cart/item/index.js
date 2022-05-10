import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../../../../redux/storeSlice'
import { useDispatch } from 'react-redux'

const Item = ({
  product_id,
  product_name,
  price,
  image,
  rating,
  supplier_name,
  quantity,
}) => {
  const [qty, setQty] = useState(quantity)
  const dp = useDispatch()
  const increase = () => {
    setQty((prevState) => {
      return prevState + 1
    })
  }
  const decrease = () => {
    setQty((prevState) => {
      if (prevState === 1) return prevState
      else {
        return prevState - 1
      }
    })
  }

  const Rating = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) Rating.push(<i className='fas fa-star'></i>)
    else Rating.push(<i key={i} className='far fa-star'></i>)
  }
  console.log(Rating[4])
  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={image} alt={product_name} />
      </div>
      <div className='cart-item-detail'>
        <h4>
          <Link to={`/products/${product_id}`}>
            <a href='#'>{product_name}</a>
          </Link>
        </h4>
        <h5>
          By{' '}
          <span>
            <a href='#'>{supplier_name}</a>
          </span>
        </h5>
        <div className='cart-item-rating'>
          <span style={{ color: '#FF9F1C' }}>{Rating}</span>
        </div>
        <p className='secondary'>In stock</p>
        <div className='qty'>
          <p>Qty</p>
          <div className='qty-btn'>
            <button
              className='qty-dec'
              onClick={() => {
                if (qty > 1) {
                  dp(decreaseQty(product_id))
                }
                decrease()
              }}
            >
              -
            </button>
            <span id='qty'>{qty}</span>
            <button
              className='qty-inc'
              onClick={() => {
                dp(increaseQty(product_id))
                increase()
              }}
            >
              +
            </button>
          </div>
        </div>
        <p className='secondary'>8% off 2 offers Available</p>
      </div>
      <div className='price'>
        <h4>{price}</h4>
        <h6>Free shipping</h6>
        <button
          id='remove'
          className='btn btn-remove'
          onClick={() => dp(removeFromCart(product_id))}
        >
          Remove
        </button>
        <button className='btn btn-wishlist'>Wishlist</button>
      </div>
    </div>
  )
}
export default Item
