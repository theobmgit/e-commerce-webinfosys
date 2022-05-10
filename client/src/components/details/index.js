import { React, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/storeSlice'
import Header from '../header'
import Footer from '../footer'
const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector((state) =>
    state.store.products.find((item) => item.product_id === Number(id))
  )
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const order = {
    ...product,
    quantity: qty,
  }

  const increase = () => {
    setQty((prevState) => {
      return prevState + 1
    })
  }
  const decrease = () => {
    setQty((prevState) => {
      if (prevState === 1) return prevState
      else return prevState - 1
    })
  }
  return (
    <>
      <Header />
      <div className='container my-5 details'>
        <div className='row'>
          <div className='col-sm-4 div1'>
            <img
              src={product.image}
              alt={product.product_name}
              className='img-fluid'
              width='500'
              height='600'
            />
          </div>
          <div className='col-sm div2'>
            <h1>{product.product_name}</h1>
            <p className='card-text item-company mb-0'>
              <span>by </span>
              <a>{product.supplier_name}</a>
            </p>
            <h4 className='item-price mr-1'>{product.price} VND</h4>
            <p>
              Available - <span className='text-success'>In stock</span>
            </p>
            <p>{product.description}</p>
            <ul>
              <li>Free shipping</li>
              <li>EMI Options Available</li>
            </ul>
            <div className='qty'>
              <p>Qty</p>
              <div className='qty-btn'>
                <button
                  id='qty-dec'
                  className='qty-dec'
                  onClick={() => decrease()}
                >
                  -
                </button>
                <span id='qty'>{qty}</span>
                <button
                  className='qty-inc'
                  id='qty-inc'
                  onClick={() => increase()}
                >
                  +
                </button>
              </div>
            </div>
            <div className='buttons row '>
              <button
                className='btn-add col-5 text-white'
                onClick={() => dispatch(addToCart(order))}
              >
                <i className='fas fa-cart-plus mx-1'></i> Add to cart
              </button>
              <button className='btn-add col-5'>
                <i
                  className='fas fa-heart mx-1'
                  style={{ color: '#ea5455' }}
                ></i>{' '}
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default ProductDetails
