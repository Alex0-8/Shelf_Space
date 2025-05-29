import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import booksReducer from "../redux/slices/booksSlice"
import { configureStore } from "@reduxjs/toolkit";
import booksByGenreReducer from "../redux/slices/booksByGenre"
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../components/HomePage";

const createMockStore = (preloadedState) => configureStore({
    reducer: {
        books: booksReducer,
        booksByGenre: booksByGenreReducer,
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

afterEach(() => {
    jest.clearAllMocks()

})

describe('Home page tests', () => {
        const mockBooksByGenre = {
        fiction: [
            { id: "/works/OL12345W", title: "The Great Adventure", author: "John Doe", year: 1999, coverId: 123456 },
            { id: "/works/OL67890W", title: "Mystery of the Night", author: "Jane Smith", year: 2005, coverId: 654321 },
            { id: "/works/OL13579W", title: "Urban Dreams", author: "Carlos Ruiz", year: 2012, coverId: 135791 },
        ],
        mystery: [
            { id: "/works/OL99999W", title: "A Clue in the Dark", author: "Detective X", year: 2020, coverId: 999999 },
            { id: "/works/OL22222W", title: "Whispers in the Hall", author: "Ana Torres", year: 2018, coverId: 222222 },
        ],
        fantasy: [
            { id: "/works/OL11111W", title: "Dragons and Dreams", author: "Emily Knight", year: 2010, coverId: 111111 },
            { id: "/works/OL33333W", title: "Realm of Shadows", author: "Luis Fernández", year: 2015, coverId: 333333 },
        ],
        science_fiction: [
            { id: "/works/OL44444W", title: "Voyage to Tomorrow", author: "Olivia Chen", year: 2021, coverId: 444444 },
            { id: "/works/OL55555W", title: "Galactic Frontier", author: "Mark Silva", year: 2019, coverId: 555555 },
        ],
        love: [
            { id: "/works/OL66666W", title: "Hearts Unbound", author: "Sophia López", year: 2017, coverId: 666666 },
            { id: "/works/OL77777W", title: "Summer of Us", author: "Daniela Ruiz", year: 2022, coverId: 777777 },
        ]
    };

    const mockSearchResults = [
        { key: "/works/OL88888W", title: "Harry Potter and the Test", author: "J. K. Tester", year: 2001, coverId: 888888, },
        { key: "/works/OL99998W", title: "Beyond Testing", author: "QA Master", year: 2023, coverId: 999998, },
    ];


    it('should show books by genre', () => {
        const preloadedState = {
            booksByGenre: {
                resultsByGenre: mockBooksByGenre,
                loadingByGenre: { fiction: false, mystery: false, fantasy: false, science_fiction: false, love: false },
                errorByGenre:   { fiction: null,  mystery: null,  fantasy: null,  science_fiction: null,  love: null }
            },
            books: { status: 'idle', results: [], error: null, loading: false, searchTerm: '' }
        }

        const store = createMockStore(preloadedState);
        componentRender(<HomePage skipFetch={true} />, store)

        expect(screen.getByAltText('A Clue in the Dark')).toBeInTheDocument();
        expect(screen.getByAltText('Dragons and Dreams')).toBeInTheDocument();
        expect(screen.getByAltText('Mystery of the Night')).toBeInTheDocument();
    });

    it('should search books with the search btn', () => {
        const preloadedState = {
            booksByGenre: {
                resultsByGenre: mockBooksByGenre,
                loadingByGenre: { fiction: false, mystery: false, fantasy: false, science_fiction: false, love: false },
                errorByGenre:   { fiction: null,  mystery: null,  fantasy: null,  science_fiction: null,  love: null }
            },
            books: { status: 'idle', results: [], error: null, loading: false, searchTerm: '' }
        }

        const store = createMockStore(preloadedState)
        componentRender(<HomePage skipFetch={true} />, store)

        const searchInput = screen.getByPlaceholderText('Buscar libro')
        fireEvent.change(searchInput, {target: {value: 'Harry'}});
        const searchBtn = screen.getAllByRole('button')
        fireEvent.click(searchBtn[1])

        console.log(store.getState().books.searchTerm)
        expect(store.getState().books.searchTerm).not.toBe('')
    });

    it('should reset the searchterm', () => {
        const preloadedState = {
            booksByGenre: {
                resultsByGenre: {},
                loadingByGenre: {},
                errorByGenre:   {}
            },
            books: { status: 'idle', results: [], error: null, loading: false, searchTerm: 'ad' }
        }

        const store = createMockStore(preloadedState)
        componentRender(<HomePage skipFetch={true} />, store)

        const resetBtn = screen.getAllByRole('button')
        expect(screen.getByText(/No se encontraron resultados/i)).toBeInTheDocument()

        fireEvent.click(resetBtn[0]);

        expect(store.getState().books.searchTerm).toBe('')
    });

    it('should show the results of a search', () => {
        const preloadedState = {
            booksByGenre: {
                resultsByGenre: {},
                loadingByGenre: {},
                errorByGenre:   {}
            },
            books: { status: 'idle', results: mockSearchResults, error: null, loading: false, searchTerm: 'Harry' }
        }

        const store = createMockStore(preloadedState)
        componentRender(<HomePage skipFetch={true} />, store)

        expect(screen.getByAltText('Harry Potter and the Test')).toBeInTheDocument()
    });

    it('should show an error message whith no results', () => {
        const preloadedState = {
            booksByGenre: {
                resultsByGenre: {},
                loadingByGenre: {},
                errorByGenre:   {}
            },
            books: { status: 'idle', results: [], error: 'error', loading: false, searchTerm: '' }
        }

        const store = createMockStore(preloadedState)
        componentRender(<HomePage skipFetch={true} />, store)

        expect(screen.getByText('Error al buscar')).toBeInTheDocument()
    });
});