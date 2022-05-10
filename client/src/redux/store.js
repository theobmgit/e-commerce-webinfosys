import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import storeReducer from './storeSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    store: storeReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

export default store
// export default configureStore({
//   reducer: {
//     store: storeReducer,
//   },
// })
