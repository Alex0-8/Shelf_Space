import {configureStore} from '@reduxjs/toolkit'
import booksReducer from './slices/booksSlice'
import booksByGenreReducer from './slices/booksByGenre'
import bookDetailsReducer from './slices/bookDetailsSlice'

const store = configureStore({
    reducer: {
        books: booksReducer,
        booksByGenre: booksByGenreReducer,
        bookDetails: bookDetailsReducer,
    }
})

export default store;