import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './style.css'

const Header = ({setDisplay}) => {
    const products = useSelector(state => state.store.products)
    const cart = useSelector(state => state.store.cart)
    const [searchInput, setSearchInput] = useState('')
    const [isCartChanged, setIsCartChanged] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchInput === '') {
            return setDisplay(products)
        }

        setDisplay(
            products.filter((item) => {
                return item.product_name.toLowerCase().includes(searchInput)
            })
        )
    }

    useEffect(() => {
        setIsCartChanged(cart.length !== 0)
    }, [cart])

    return (
        <header className="header-container p-3 p-lg-2">
            <div className='d-flex flex-wrap align-items-center justify-content-between container'>
                <div className='d-none d-lg-block fs-1 fw-bolder'>
                    <Link to='/'>TECHMART</Link>
                </div>
                <form className='col-6 col-lg-auto'>
                    <input
                        type="search"
                        aria-label="Search"
                        className="p-2 me-2 rounded-pill"
                        placeholder={'Search...'}
                        size={40}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                    />
                    <button className='btn-primary p-2 text-uppercase rounded-pill' onClick={handleSearch}>
                        <i className='fa fa-search me-0 me-md-2'/>
                        <span className='d-none d-md-inline'>Search</span>
                    </button>
                </form>
                <div className='col-4 col-lg-auto d-flex align-self-center justify-content-around'>
                    <Link to='/checkout/cart'>
                        <button type="button" className="btn-secondary p-2 position-relative rounded-pill">
                            <i className='fa fa-shopping-cart me-0 me-md-1'/>
                            {
                                isCartChanged ?
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                    </span> : <span/>
                            }
                            <span className='d-none d-md-inline'>Cart</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
