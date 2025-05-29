import styled from "styled-components";

const ShelfContainer = styled.section`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;

    & h2 {
        font-size: 30px;
        text-align: center;
    }

    & h3 {
        font-size: 25px;
    }
`

const TagsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 15px;
    justify-content: center;
`

const Tag = styled.button`
    font-weight: 600;
    font-size: 18px;
    padding: 4px;
    background-color: #00ffff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: #00ff15;
    }

    @media(hover:hover){
        &:hover{
            transform: scale(.9);
        }
    }
`

const BooksSection = styled.section`
    padding: 20px;
    max-height: 730px;
    margin: 20px 0 20px 0;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    align-items: start;
    border-radius: 8px;
    border: 2px solid #ddd;
    gap: 20px;

    &::-webkit-scrollbar{
        width: 5px;
        background-color: #000;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c92ff8;
        border-radius: 5px;
    }
`;

const BookElement = styled.div`
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

export {
    ShelfContainer,
    TagsContainer,
    Tag,
    BooksSection,
    BookElement,
}