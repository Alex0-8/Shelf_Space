import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksByGenre } from "../../redux/slices/booksByGenre";
import { BookCard, BooksContainer, GenreContainer, ResultElement, ResultsSection, SearchResultsContainer } from "./styles";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import loadingImg from "../../img/loading5.gif"
import { fetchBooks, setSearchTerm } from "../../redux/slices/booksSlice";

const Genres = [
    { key: 'fiction', label: 'Ficción' },
    { key: 'mystery', label: 'Misterio' },
    { key: 'science_fiction', label: 'Ciencia Ficción' },
    { key: 'love', label: 'Romance' },
    { key: 'fantasy', label: 'Fantasía' }
]

const HomePage = ({ skipFetch = false }) => {
    const dispatch = useDispatch();
    const genreRefs = useRef({})
    const {resultsByGenre, loadingByGenre, errorByGenre} = useSelector(state => state.booksByGenre)
    const {results: searchResults, loading: isLoading, error, searchTerm } = useSelector(state => state.books)

    useEffect(() => {
        const handlers = [];

        Object.entries(genreRefs.current).forEach(([key, ref]) => { //permite hacer scroll lateral en cada genero de libros
            if (ref) {
                const handler = (e) => {
                    // Solo si hay contenido para hacer scroll
                    if (ref.scrollWidth > ref.clientWidth) {
                        e.preventDefault();
                        ref.scrollLeft += e.deltaY;
                    }
                };

                ref.addEventListener("wheel", handler, { passive: false });
                handlers.push({ ref, handler });
            }
        });

        return () => {
            handlers.forEach(({ ref, handler }) => {
                ref.removeEventListener("wheel", handler);
            });
        };
    }, [resultsByGenre]);


    useEffect(() => {
        if(skipFetch) return
        Genres.forEach(({ key }) => {
            dispatch(fetchBooksByGenre({genre: key, limit: 10}))
        });
    }, [dispatch, skipFetch]);

    const handleSearch = (term) => {
        if(term.trim() === '') return;
        dispatch(setSearchTerm(term))
        dispatch(fetchBooks(`/search.json?q=${term}`))
    }

    const renderSearchResults = () => (
        <SearchResultsContainer>
            <h2>Resultados de busqueda para: "{searchTerm}"</h2>
            <SearchBar onSearch={handleSearch}/>

            <ResultsSection>
            {searchResults.map(book => (
                <Link key={book.key} to={`/book/${book.key.replace('/works/', '')}`}>
                <ResultElement>
                    {book.coverId ? (
                            <img 
                                src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                                alt={book.title}
                                />
                        ) : (
                            <div>
                                <h3>{book.title}</h3>
                                <p>Autor: {book.author}</p>
                                <p>Año: {book.year}</p>
                            </div>
                        )
                    }
                </ResultElement>
                </Link>
            ))}
            </ResultsSection>
        </SearchResultsContainer>
    )

    const renderBooks = () =>(
        <BooksContainer>
            <h2>Explora libros</h2>
            <SearchBar onSearch={handleSearch}/>

            {Genres.map(({key, label}) => (
                <section key={key}>
                    <h3>{label}</h3>

                    {loadingByGenre[key] ? (
                        <img src={loadingImg} alt="Cargando..." />
                    ) : errorByGenre[key] ? (
                        <p>Error: {errorByGenre[key]}</p>
                    ) : (
                        <GenreContainer ref={(el) => (genreRefs.current[key] = el)}>
                            {(resultsByGenre[key] || []).map(book => (
                                <Link key={book.id} to={`/book/${book.id.replace('/works/', '')}`}>
                                <BookCard key={book.id}>
                                    {book.coverId ? (
                                        <img 
                                            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                                            alt={book.title}
                                            />
                                    ) : (
                                        <div>
                                            <h3>{book.title}</h3>
                                            <p>Autor: {book.author}</p>
                                            <p>Año: {book.year}</p>
                                        </div>
                                    )}
                                </BookCard>
                                </Link>
                            ))}
                        </GenreContainer>
                    )}
                </section>
            ))}
        </BooksContainer>
    )

    const allGenresFailed = Genres.every(({key}) => errorByGenre[key])

    const renderContent = () => {
        if(isLoading) return <SearchResultsContainer><img src={loadingImg} alt="Cargando..."/></SearchResultsContainer>
        if(allGenresFailed) return <BooksContainer genreshaserror><h2>Error al cargar </h2><SearchBar onSearch={handleSearch} /></BooksContainer>
        if(error) return <><BooksContainer haserror><h2>Error al buscar</h2></BooksContainer>{renderBooks()}</>
        if(searchTerm === '') return renderBooks()
        if(searchTerm && searchResults.length === 0) return <BooksContainer notfound="true"><SearchBar onSearch={handleSearch}/><p><strong>No se encontraron resultados para:</strong> {searchTerm}</p></BooksContainer>
        return renderSearchResults();
    }
    
    return renderContent();
}

export default HomePage;