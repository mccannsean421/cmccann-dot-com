import Nav from "../Nav";
import {render } from "@testing-library/react";

describe("Navigation Component", () => {
    it ("renders without crashing", () => {
        render(<Nav />);
    });
})