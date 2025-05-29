import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDLE } from './status';

export const fetchBooksByGenre = createAsyncThunk('books/fethcByGenre', async ({ genre, limit = 10 }, thunkAPI) => {
    try{
        const respone = await axios.get('https://openlibrary.org/search.json', {
            params: { subject: genre, limit }
        });

        return {
            genre,
            books: respone.data.docs.map(book => ({
                id: book.key,
                title: book.title,
                author: book.author_name?.join(', ') || 'Autor desconocido',
                year: book.first_publish_year,
                coverId: book.cover_i,
            }))
        }
    }catch(error){
        return thunkAPI.rejectWithValue({genre, error: error.message})
    }
})

const booksByGenreSlice = createSlice({
    name: 'booksByGenre',
    initialState: {
        status: IDLE,
        resultsByGenre: {},
        loadingByGenre: {},
        errorByGenre: {},
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchBooksByGenre.pending, (state, action) => {
            const { genre } = action.meta.arg;
            state.loadingByGenre[genre] = true;
            state.errorByGenre[genre] = null;
        })
        .addCase(fetchBooksByGenre.fulfilled, (state, action) => {
            const { genre, books } = action.payload;
            state.resultsByGenre[genre] = books;
            state.loadingByGenre[genre] = false;
        })
        .addCase(fetchBooksByGenre.rejected, (state, action) => {
            const { genre, error } = action.payload;
            state.loadingByGenre[genre] = false;
            state.resultsByGenre[genre] = [];
            state.errorByGenre[genre] = error;
        })
    }
})

export default booksByGenreSlice.reducer;