import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import { configureStore } from "@reduxjs/toolkit";
import booksByGenreReducer from "../redux/slices/booksByGenre"
import booksReducer from "../redux/slices/booksSlice"
import bookDetailsReducer, { fetchBookDetails } from "../redux/slices/bookDetailsSlice"
import BookDetails from "../components/BookDetails";

jest.mock('../redux/slices/bookDetailsSlice', () => { // mockea el slice de busqueda
    const actual = jest.requireActual('../redux/slices/bookDetailsSlice')

    return{
        __esModule: true,
        ...actual,
        fetchBookDetails: () => async (dispatch) => {
            dispatch({
                type: 'booksDetails/fetchBookDetails/fulfilled',
                payload: { id: "/works/OL10004W", title: "The Favorites of Code", first_publish_date: 2021, coverId: 100004,},
                
            })
        }
    }
})

const createMockStore = (preloadedState) => configureStore({
    reducer: {
        // books: booksReducer,
        // booksByGenre: booksByGenreReducer,
        bookDetails: bookDetailsReducer,
    },
    preloadedState
})

const componentRender = ( ui, store ) => {
    return (
        render(
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    {ui}
                </MemoryRouter>
            </ThemeProvider>
        </Provider>
    ))
}

describe('pagedetails tests', () => {
    it('should render the book details', () => {
        const preloadedState = {
            bookDetails: {
                data: null,
                error: null
            }
        }

        const store = createMockStore(preloadedState)
        componentRender(<BookDetails />, store)

        expect(screen.getByText('The Favorites of Code')).toBeInTheDocument()
        expect(screen.getByText('2021')).toBeInTheDocument()
    });

    it('should add a tag to the book ', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

        const preloadedState = {
            bookDetails: {
                data: null,
                error: null
            }
        }

        const store = createMockStore(preloadedState)
        componentRender(<BookDetails />, store)

        const tag = screen.getByText('Leido')
        fireEvent.click(tag)

        expect(tag).toBeInTheDocument()
        expect(alertSpy).toHaveBeenCalled()

        alertSpy.mockRestore()
    });

    it('should show an message if thers no info', () => {
        const preloadedState = {
            bookDetails: {
                data: null,
                error: null
            }
        }

        const store = createMockStore(preloadedState)
        componentRender(<BookDetails />, store)

        const noInfoTxt = screen.getAllByText('No disponible')
        expect(noInfoTxt.length).toBe(2)
    });
});