import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookElement, BooksSection, ShelfContainer, Tag, TagsContainer } from "./styles";

const MyShefl = () => {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('shelf')) || [];
        setBooks(stored);
    }, [])

    const handleFilter = (status) => {
        setFilter(status);
    }

    const renderShelf = () => (
        <ShelfContainer>
            <h2>My Shelf</h2>
            {/* <button onClick={() => {
                localStorage.removeItem('shelf')
                setBooks([])
            }}>Limpiar todo</button> */}
            <h3>Filtrar por: </h3>
            <TagsContainer>
                <Tag onClick={() => setFilter(null)} >Mostrar todos</Tag>
                {['Leyendo', 'Leido', 'Pendiente', 'Favorito', 'Abandonado'].map((status) => (
                    <Tag key={status} onClick={() => handleFilter(status)} >{status}</Tag>
                ))}
            </TagsContainer>

            <BooksSection>
            { books.filter(book => !filter || book.status === filter).map((book) => (
                <Link key={book.id} to={`/book/${book.id.replace('/works/', '')}`}>
                <BookElement>
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
                </BookElement>
                </Link>
            )) }
            </BooksSection>
        </ShelfContainer>
    )

    const renderContent = () => {
        if(books.length === 0) return <ShelfContainer><h2>No hay nada</h2></ShelfContainer>
        return renderShelf();
    }

    return renderContent();
}

export default MyShefl;