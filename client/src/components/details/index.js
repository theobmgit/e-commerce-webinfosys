import {useState} from 'react'
import {useParams} from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../../redux/storeSlice'
import Header from '../header'
import Footer from '../footer'

const ProductDetails = () => {
    const {id} = useParams()
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
            <Header/>
            <div className='container my-5'>
                <div className="card">
                    <div className="row">
                        <div className='col-sm-5 card-image'>
                            <img
                                src={product.image}
                                alt={product.product_name}
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-sm-7'>
                            <div className="card-body p-5">
                                <h1 className='card-title display-3'>{product.product_name}</h1>
                                <p className='card-text'>
                                    <span>by </span>
                                    <a>{product.supplier_name}</a>
                                </p>
                                <h2 className='card-text item-price fw-bolder display-3'>{Number(product.price).toLocaleString()} VND</h2>
                                <p>
                                    Available - <span className='text-success'>In stock</span>
                                </p>
                                <p className='fs-5'>{product.description}</p>
                                <ul className='fw-light'>
                                    <li>Free shipping</li>
                                    <li>EMI Options Available</li>
                                </ul>
                                <div className='qty fs-4'>
                                    <p>Quantity</p>
                                    <div className='qty-btn'>
                                        <button
                                            id='qty-dec'
                                            className='qty-dec'
                                            onClick={() => decrease()}
                                        >
                                            -
                                        </button>
                                        <span className='fs-3' id='qty'>{qty}</span>
                                        <button
                                            className='qty-inc'
                                            id='qty-inc'
                                            onClick={() => increase()}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className='buttons row fs-5'>
                                    <button
                                        className='btn-primary btn-add col-5 text-white me-2'
                                        onClick={() => dispatch(addToCart(order))}
                                    >
                                        <i className='fas fa-cart-plus mx-1'/> Add to cart
                                    </button>
                                    <button className='btn-secondary btn-love col-5'>
                                        <i
                                            className='fas fa-heart mx-1'
                                            style={{color: '#ea5455'}}
                                        />{' '}
                                        Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ProductDetails
