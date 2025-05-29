import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import {FAILED, IDLE, LOADING, SUCCEDED} from './status'

export const fetchBooks = createAsyncThunk('books/fetchBoks', async (endpoint, thunkAPI) => {
    try{
        const response = await axios.get(`https://openlibrary.org${endpoint}`)
        console.log('resultados de busqueda: ', response)

        return response.data.docs.map((book) => ({
            key: book.key,
            title: book.title,
            author: book.author_name?.join(', ') || 'Autor desconocido',
            year: book.first_publish_year,
            coverId: book.cover_i,
        }))
    }catch(error){
        return thunkAPI.rejectWithValue('error al obtener los datos: ', error)
    }
});

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        status: IDLE,
        results: [],
        error: null,
        loading: false,
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        resetSearchResults: (state) => {
            state.results = [];
            state.searchTerm = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state) => {
            state.status = LOADING;
            state.error = null;
            state.loading = true;
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = SUCCEDED;
            state.results = action.payload;
            state.loading = false;
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.status = FAILED;
            state.results = [];
            state.error = action.payload || 'Ha ocurrido un error';
            state.loading = false;
        });
    }
})

export const { setSearchTerm, resetSearchResults } = booksSlice.actions;

export default booksSlice.reducer;