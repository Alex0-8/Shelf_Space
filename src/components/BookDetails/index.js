import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearBookDetails, fetchBookDetails } from "../../redux/slices/bookDetailsSlice";
import { BookData, BookDetailsContainer, BookImg, Tag, TagsSection } from "./styles";
import loadingImg from '../../img/loading5.gif';

const BookDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: book, status, error } = useSelector(state => state.bookDetails);

    useEffect(() => {
        dispatch(fetchBookDetails(`/works/${id}`));
        return () => dispatch(clearBookDetails());
    }, [dispatch, id]);

    const handleAddToShelf = (status) => {
        if(!book) return;

        const shelf = JSON.parse(localStorage.getItem('shelf')) || [];
        const existingIndex = shelf.findIndex(item => item.id === book.key)

        const newEntry = {
            id: book.key,
            title: book.title,
            coverId: book.covers?.[0] || null,
            status
        }

        if(existingIndex !== -1){
            shelf[existingIndex] = {
                ...shelf[existingIndex], 
                status
            }
            alert(`"${book.title}" ahora esta marcado como "${status}"`)
        }else{
            shelf.push(newEntry);
            alert(`"${book.title}" fue añadido como "${status}"`)
        }

        localStorage.setItem('shelf', JSON.stringify(shelf))
    }

    const renderDetails = () => {
       if (!book) return null;

        const coverUrl = book.covers?.[0]
            ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
            : `https://via.placeholder.com/200x300?text=Sin+Portada`;

        return (
            <BookDetailsContainer>
                <BookImg src={coverUrl} alt={book.title} />
                <BookData>
                    <h2>{book.title}</h2>
                    <p><strong>Descripción: </strong>{book.description?.value || book.description || 'No disponible'}</p>
                    <p><strong>Primer año de publicación: </strong>{book.first_publish_date || 'Desconocido'}</p>
                    <p><strong>Temas: </strong>{book.subjects?.join(', ') || 'No disponible'}</p>
                </BookData>

                <TagsSection>
                    <h4>Etiquetas</h4>
                    {['Leyendo', 'Leido', 'Pendiente', 'Favorito', 'Abandonado'].map(tag => (
                        <Tag key={tag} onClick={() => handleAddToShelf(tag)} >{tag}</Tag>
                    ))}
                </TagsSection>
            </BookDetailsContainer>
        );
    };

    const renderContent = () => {
        if(status === 'loading') return <BookDetailsContainer><img src={loadingImg} alt="Cargando..."/></BookDetailsContainer>
        if(status === 'failed' && error) return <div><p>Error</p></div>
        if(!book) return <div><p>No se encontro nada</p></div>
        console.log(book)
        return renderDetails();
    }
    
    return renderContent();
}

export default BookDetails;