import React, {useEffect, useState} from 'react'

import Item from './item/index'
import Filter from './filter/index'
import Pagination from './pagination/index'
import Header from '../header'
import Footer from '../footer'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../../redux/storeSlice'

import './style.scss'

const Products = () => {
    const products = useSelector(state => state.store.products)
    const dispatch = useDispatch()
    const [displayProducts, setDisplayProducts] = useState(products)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(9)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = displayProducts.slice(indexOfFirstItem, indexOfLastItem)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const newProduct = currentItems.map((item) => {
        return (
            <div key={item.product_id} className='col-4 item'>
                <Item {...item} />
            </div>
        )
    })
    return (
        <>
            <Header setDisplay={setDisplayProducts}/>
            <div className='row justify-content-center bg-light'>
                <div className='col-9 content px-2'>
                    <div className='row justify-content-around'>
                        <div className='col-2 sidebar'>
                            <div className='filter-col'>
                                <Filter setDisplay={setDisplayProducts}/>
                            </div>
                        </div>
                        <div className='col-9 products'>
                            <div className='products-wrapper'>
                                <div className='row'>{newProduct}</div>
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
