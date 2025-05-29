import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import { ThemeProvider } from "styled-components";
import Theme from "../theme";
import { MemoryRouter } from "react-router-dom";
import MyShefl from "../components/MyShelf";

const componentRender = ( ui ) => {
    return (
        render(
            <ThemeProvider theme={Theme}>
                <MemoryRouter>
                    {ui}
                </MemoryRouter>
            </ThemeProvider>
    ))
}

describe('My shelf tests', () => {
    const mockShelfBooks = [
        { id: "/works/OL10001W", title: "Journey Through Testing", author: "Alice QA", year: 2018, coverId: 100001, status: "Leyendo",},
        { id: "/works/OL10002W", title: "Mastering Mock Data", author: "Bob Dev", year: 2020, coverId: 100002, status: "Leido", },
        { id: "/works/OL10003W", title: "Async Await Adventures", author: "Charlie Async", year: 2019, coverId: 100003,status: "Pendiente", },
        { id: "/works/OL10004W", title: "The Favorites of Code", author: "Dana Design", year: 2021, coverId: 100004, status: "Favorito", },
        { id: "/works/OL10005W", title: "Abandoned Patterns", author: "Evan Error", year: 2017, coverId: 100005, status: "Abandonado",},
        { id: "/works/OL88888W", title: "Harry Potter and the Test", author: "J. K. Tester", year: 2001, coverId: 888888, status: "Leido",},
        { id: "/works/OL99998W", title: "Beyond Testing", author: "QA Master", year: 2023, coverId: 999998, status: "Leyendo",},
    ];

    beforeEach(() => {
        localStorage.clear()
    })

    it('should show the shelf books', () => {
        localStorage.setItem('shelf', JSON.stringify(mockShelfBooks))
        componentRender(<MyShefl />)

        expect(screen.getByAltText('Beyond Testing')).toBeInTheDocument();
    });

    it('should show an message when the shelf is empty', () => {
        localStorage.removeItem('shelf')
        componentRender(<MyShefl />)

        expect(screen.getByText('No hay nada')).toBeInTheDocument()
    });

    it('should filter the books correctly', () => {
        localStorage.setItem('shelf', JSON.stringify(mockShelfBooks))
        componentRender(<MyShefl />)

        //copmrueba que al inicio se muestren todos los libros de la lista mockeada y despues los filtra con cada filtro
        expect(screen.getAllByRole('img').length).toBe(7)

        fireEvent.click(screen.getByText('Leyendo'))
        expect(screen.getAllByRole('img').length).toBe(2)

        fireEvent.click(screen.getByText('Leido'))
        expect(screen.getAllByRole('img').length).toBe(2)

        fireEvent.click(screen.getByText('Pendiente'))
        expect(screen.getAllByRole('img').length).toBe(1)

        fireEvent.click(screen.getByText('Favorito'))
        expect(screen.getAllByRole('img').length).toBe(1)

        fireEvent.click(screen.getByText('Abandonado'))
        expect(screen.getAllByRole('img').length).toBe(1)

        fireEvent.click(screen.getByText('Mostrar todos'))
        expect(screen.getAllByRole('img').length).toBe(7)
    });
});