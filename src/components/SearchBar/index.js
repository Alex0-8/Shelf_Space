import { useState } from "react"
import React from "react";
import { useDispatch } from "react-redux";
import { fetchBooks, resetSearchResults, setSearchTerm } from "../../redux/slices/booksSlice";
import { ResetBtn, SearchContainer, SearchInput, SubmitBtn } from "./styles";

const SearchBar = ({ onSearch }) => { // el onsearch solo es para las prebas con jest
    const [searchTerm, setTerm] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (term) => {
        if(term.trim() === '') return;
        dispatch(setSearchTerm(term))
        dispatch(fetchBooks(`/search.json?q=${term}`))
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
            handleSearch(searchTerm)
        }

    }

    const handleResetResults = () => {
        dispatch(resetSearchResults())
    }

    return (
        <SearchContainer>
            <ResetBtn type="button" onClick={handleResetResults}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </ResetBtn>
            <SearchInput 
                type="text"
                placeholder="Buscar libro"
                value={searchTerm}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SubmitBtn type="button" onClick={() => handleSearch(searchTerm)}  aria-label="search_btn" className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </SubmitBtn>
        </SearchContainer>
    )
    
}

export default SearchBar;