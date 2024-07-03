import Nav from "../Nav";
import {render,screen, getByText, toBeInTheDocument } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Navigation Component", () => {
    it ("renders expected links", () => {
        render(<Nav />);
        const expectedLinks = ["Home", "Work", "Blog"];

        expectedLinks.forEach((link) => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });
})