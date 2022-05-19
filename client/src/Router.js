import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './components/home'
import ProductDetails from './components/details/index'
import Products from './components/products/Products'
import ErrorPage from './ErrorPage'
import Cart from './components/checkout/cart/index'
import Address from './components/checkout/address/index'
import PaymentSelect from "./components/zalopay/select/payment-select";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='products/:id' element={<ProductDetails/>}/>
                <Route path='checkout/cart' element={<Cart/>}/>
                <Route path='checkout/address' element={<Address/>}/>
                <Route path='checkout/payment' element={<PaymentSelect/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
