import styled from "styled-components";

const BooksContainer = styled.section`
    width: 85%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 8px;
    margin-top: ${({haserror, notfound}) => haserror ? "25px" : notfound ? "25px" : "0"};
    box-shadow: ${({haserror, notfound}) => haserror ? "0px 0px 10px 3px #ff1111" : notfound ? "0px 0px 10px 3px #60f5d0" : "none"};

    ${({notfound}) => 
        notfound && 
        `
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        & p {
            font-size: 28px;
            text-align: center;
        }

        @media screen and (max-width: 730px) {
            flex-direction: column;
        }
       `}

    ${({haserror}) => 
        haserror && 
        `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        & p {
            font-size: 28px;
        }
        `}


    ${({genreshaserror}) => 
        genreshaserror && 
        `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        box-shadow: 0px 0px 10px 3px #ff1111;

        @media screen and (max-width: 670px) {
            flex-direction: column;
        }
    `}

    & > h2 {
        text-align: center;
        font-size: 37px;
    }

    & h3 {
        font-size: 35px;
    }

    & > section img:first-child {
        width: 100%;
        margin: 0 auto;
    }
`;

const GenreContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding: 15px;
    gap: 15px;
    overflow-x: auto;
    margin-bottom: 15px;
    scroll-behavior: smooth;
    border: 1px solid #ddd;

    &::-webkit-scrollbar{
        height: 5px;
        background-color: #000;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c92ff8;
        border-radius: 5px;
    }
`

const SearchResultsContainer = styled.section`
    width: 85%;
    margin: 0 auto;
    padding: 10px;

    & > h2 {
        text-align: center;
        font-size: 37px;
    }

    & h3 {
        font-size: 35px;
    }

    & img {
        width: 100%;
        margin: 0 auto;
    }
`

const ResultsSection = styled.section`
    padding: 20px;
    height: 730px;
    margin: 20px 0 20px 0;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    align-items: start;
    gap: 20px;

    &::-webkit-scrollbar{
        height: 5px;
        background-color: #000;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c92ff8;
        border-radius: 5px;
    }
`

const ResultElement = styled.div`
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    padding: 15px;
    box-sizing: border-box;
    transition: all .3s ease;

    &:hover{
        transform: scale(.9);
    }
`

const BookCard = styled.div`
    min-width: 150px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    text-align: center;
    transition: all .3s ease;

    & img {
        width: 100%;
    }

    &:hover{
        transform: scale(.9);
    }
`

const RetryBtn = styled.button`
    cursor: pointer;
    font-size: 1.0625rem;
    font-weight: 600;
    background-color: #a0ffe8;
    width: 120px;
    padding: 5px;
    border-radius: 8px;
    border: none;
    transition: all .3s ease;

    &:active{
        background-color: #c92ff8;
        color: #000;
    }

    &:hover{
        background-color: #26b0d3;
    }
`

export {
    BooksContainer,
    GenreContainer,
    BookCard,
    SearchResultsContainer,
    ResultsSection,
    ResultElement,
    RetryBtn
}