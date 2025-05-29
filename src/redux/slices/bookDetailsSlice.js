import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING, SUCCEDED } from "./status";

export const fetchBookDetails = createAsyncThunk('booksDetails/fetchBookDetails', async (bookId, thunkAPI) => {
    try{
        const response = await axios.get(`https://openlibrary.org${bookId}.json`);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue('Error al obtener los datos del libro')
    }
});

const bookDetailsSlice = createSlice({
    name: 'bookDetails',
    initialState: {
        status: IDLE,
        data: null,
        error: null,
    },
    reducers: {
        clearBookDetails: (state) => {
            state.data = null;
            state.status = IDLE;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBookDetails.pending, (state) => {
            state.status = LOADING;
            state.error = null;
        })
        .addCase(fetchBookDetails.fulfilled, (state, action) => {
            state.status = SUCCEDED;
            state.data = action.payload;
        })
        .addCase(fetchBookDetails.rejected, (state, action) => {
            state.status = FAILED;
            state.error = action.payload;
            state.data = null;
        })
    }
})

export const { clearBookDetails } = bookDetailsSlice.actions;

export default bookDetailsSlice.reducer;