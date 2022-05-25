import axios from 'axios'
import {createSlice} from '@reduxjs/toolkit'

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        products: [],
        cart: [],
        user: '',
        totalBill: 0,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },

        setProduct: (state, action) => {

        },

        addToCart: (state, action) => {
            state.cart.push(action.payload)
            state.totalBill = state.totalBill + action.payload.price * action.payload.quantity
        },

        removeFromCart: (state, action) => {
            const item = state.cart.find((item) => item.product_id === Number(action.payload))
            state.totalBill = state.totalBill - item.price * item.quantity
            state.cart = state.cart.filter((item) => item.product_id !== Number(action.payload))
        },

        setCart: (state, action) => {
            state.cart = action.payload
        },

        increaseQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.product_id === Number(action.payload)) {
                    state.totalBill = state.totalBill + item.price
                    return {...item, quantity: item.quantity + 1}
                } else return item
            })
        },

        decreaseQty: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.product_id === Number(action.payload) && item.quantity > 1) {
                    state.totalBill = state.totalBill - item.price
                    return {...item, quantity: item.quantity - 1}
                } else return item
            })
        },
    },
})

export const {
    setProducts, addToCart, removeFromCart, increaseQty, decreaseQty, setCart,
} = storeSlice.actions

export const getAllProducts = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:5000/products')
    dispatch(setProducts(data))
}

export const getProductById = async (id) => {
    const {data} = await axios.get(`http://localhost:5000/products/${id}`)
    return data
}

export const resetCart = (dispatch) => {
    dispatch(setCart([]))
}

export default storeSlice.reducer
