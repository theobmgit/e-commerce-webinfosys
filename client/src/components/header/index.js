import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.css'

const Header = ({ setDisplay }) => {
  const products = useSelector((state) => state.store.products)
  const [searchInput, setSearchInput] = useState('')
  const handleSearch = () => {
    console.log(searchInput)
    if (searchInput === '') {
      return setDisplay(products)
    }

    setDisplay(
      products.filter((item) => {
        return item.product_name.toLowerCase().includes(searchInput)
      })
    )
  }
  return (
    <div className='row justify-content-center header-container text-white'>
      <div className='row col-9 p-2'>
        <div className='col-2 p-2 logo d-flex align-self-center justify-content-around'>
          <Link to='/products'>TechMart</Link>
        </div>
        <div className='col-8 p-2 row search'>
          <input
            type='text'
            className='col-10'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          />
          <button className='btn-search col-2' onClick={handleSearch}>
            <i className='fa fa-search mx-1'></i>
            Search
          </button>
        </div>
        <div className='col-2 p-2 d-flex align-self-center justify-content-around user-cart'>
          <Link to='/checkout/cart'>
            <i className='fa fa-shopping-cart cart-icon fa-2x'></i>
          </Link>
          <i className='fa fa-user cart-icon fa-2x'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
