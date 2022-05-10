import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Item from './item/index'
import Footer from '../../footer'
import Header from '../../header'
import './style.css'

const Cart = () => {
  const cart = useSelector((state) => state.store.cart)
  const totalBill = useSelector((state) => state.store.totalBill)
  const [isEmpty, setIsEmpty] = useState(true)

  const checkCart = () => {
    if (cart.length === 0) setIsEmpty(true)
    else setIsEmpty(false)
  }
  const items = cart.map((item) => {
    return <Item {...item} />
  })
  useEffect(() => {
    checkCart()
  })
  console.log(totalBill)
  return (
    <>
      <Header />
      <div className='cart-container'>
        <div className='process'>
          <i className='fas fa-shopping-cart active'></i>
          <h4 className='active'>Cart</h4>
          <h4 className='process-seperate'>{'>'}</h4>
          <i className='fas fa-home'></i>
          <h4>Address</h4>
        </div>
        <div className='cart-content'>
          <div className='cart-product'>
            {isEmpty ? (
              <h3>Your cart is empty </h3>
            ) : (
              <ul>
                <li>{items}</li>
              </ul>
            )}
          </div>
          <div className='options'>
            <h4 className='title'>Options</h4>
            <div className='coupon'>
              <h4>Coupons</h4>
              <h4>
                <a href='#'>Apply</a>
              </h4>
            </div>
            <h4>Price Details</h4>
            <div className='opt-detail'>
              <p>Total MRP</p>
              <p>{totalBill} VND</p>
            </div>
            <div className='opt-detail'>
              <p>Estimated Tax</p>
              <p>{(totalBill / 1000) * 5} VND</p>
            </div>
            <div className='opt-detail bottom-line'>
              <p>Delivery Charges</p>
              <p className='secondary'>Free</p>
            </div>
            <div className='opt-detail'>
              <h4>Total</h4>
              <h4>{totalBill + (totalBill / 1000) * 5} VND</h4>
            </div>
            <Link to='/checkout/address'>
              <button className='btn btn-wishlist'>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Cart
