import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import storeReducer from './storeSlice'

const store = configureStore({
        reducer: combineReducers({
            store: storeReducer,
        })
    }
)

export default store
