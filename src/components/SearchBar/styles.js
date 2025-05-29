import styled from "styled-components";

const SearchContainer = styled.form `
    display: flex;
    border-radius: 10px;
    justify-content: flex-end;

    @media screen and (max-width: 670px) {
        justify-content: center;
    }
`;

const SearchInput = styled.input `
    font-size: 20px;
    background-color: #c1d6d5;
    outline: none;
    border: 2px solid #0075f300;
    transition: all .2s linear;

    &:focus{
        border: 2px solid #c92ff8;
    }

    @media (prefers-color-scheme: dark){
        background-color: #fff;
    }

    @media screen and (max-width: 670px) {
        width: 110px;
    }
`

const SubmitBtn = styled.button `
    cursor: pointer;
    font-size: 1.0625rem;
    font-weight: 300;
    background-color: #a0ffe8;
    width: 50px;
    height: 30px;
    border-radius: 0 8px 8px 0;
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

const ResetBtn = styled.button`
    cursor: pointer;
    font-size: 1.0625rem;
    font-weight: 300;
    background-color: #a0ffe8;
    width: 50px;
    height: 30px;
    border-radius: 8px 0 0 8px;
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
    SearchContainer,
    SearchInput,
    SubmitBtn,
    ResetBtn
}