import React, {useEffect, useState} from 'react'

import Item from './item/index'
import Filter from './filter/index'
import Pagination from './pagination/index'
import Header from '../header'
import Footer from '../footer'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/storeSlice'

import './style.css'

const Products = () => {
    const products = useSelector(state => state.store.products)
    const dispatch = useDispatch()
    const [displayProducts, setDisplayProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(15)

    useEffect(() => {
        dispatch(fetchData())
        setDisplayProducts(products)
    }, [products.length])

    useEffect(() => {
        console.log(displayProducts)
    }, [displayProducts])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = displayProducts.slice(indexOfFirstItem, indexOfLastItem)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const newProduct = currentItems.map((item) => {
        return (
            <div key={item.product_id} className='col-4'>
                <Item {...item} />
            </div>
        )
    })

    return (
        <>
            <Header setDisplay={setDisplayProducts}/>
            <div className="container">
                <div className='row justify-content-between my-5'>
                    <div className='col-2'>
                        <div className='sidebar text-white p-3'>
                            <Filter setDisplay={setDisplayProducts}/>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='products'>
                            <div className='card-group mb-5'>
                                {newProduct}
                            </div>
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalItems={displayProducts.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Products
