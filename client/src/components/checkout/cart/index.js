import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
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
            <Header/>
            <div className='cart-container'>
                <div className='process'>
                    <i className='fas fa-shopping-cart active'/>
                    <h4 className='active'>Cart</h4>
                    <h4 className='process-separate'>{'>'}</h4>
                    <i className='fas fa-home'/>
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
                        <h2 className='title'>Options</h2>
                        <div className='coupon'>
                            <h3>Coupons</h3>
                            <button className='btn-primary'>Apply</button>
                        </div>
                        <h3>Price Details</h3>
                        <div className='opt-detail'>
                            <p>Total MRP</p>
                            <p>{Number(totalBill).toLocaleString()} VND</p>
                        </div>
                        <div className='opt-detail'>
                            <p>Estimated Tax</p>
                            <p>{Number((totalBill / 1000) * 5).toLocaleString()} VND</p>
                        </div>
                        <div className='opt-detail bottom-line'>
                            <p>Delivery Charges</p>
                            <p className='secondary'>Free</p>
                        </div>
                        <div className='opt-detail'>
                            <h3>Total</h3>
                            <span className='fs-4 fw-bold item-price'>{Number(totalBill + (totalBill / 1000) * 5).toLocaleString()} VND</span>
                        </div>
                        <Link to='/checkout/address'>
                            <button className='btn btn-wishlist'>Place Order</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Cart
