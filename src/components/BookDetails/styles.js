import styled from "styled-components";

const BookDetailsContainer = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
    margin: 0 auto;
    justify-content: space-around;

    & h2 {
        font-size: 30px;
    }

    @media screen and (max-width: 730px) {
        flex-direction: column;
        align-items: center;
    }
`

const BookImg = styled.img`
    width: 200px;
`

const LoadingImg = styled.img`
    width: 400px;
    margin: 0 auto;
`

const BookData = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (max-width: 730px) {
        max-width: 85%;
    }
`

const TagsSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 7px;

    & h4 {
        font-size: 30px;
    }

    @media screen and (max-width: 730px) {
        margin-top: 20px;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const Tag = styled.p`
    color:rgb(236, 236, 236);
    background-color: #753cda;
    text-align: center;
    border-radius: 8px;
    padding: 5px;
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



export {
    BookDetailsContainer,
    BookImg,
    LoadingImg,
    BookData,
    TagsSection,
    Tag
}