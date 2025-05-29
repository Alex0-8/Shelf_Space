import { render, screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import Theme from "../theme";

describe('Header tests', () => {
    it('should show the header txt', () => {
        render(
            <ThemeProvider theme={Theme}>
            <Header />
            </ThemeProvider>
        )

        expect(screen.getByText('Shelf Space')).toBeInTheDocument()
    });
});