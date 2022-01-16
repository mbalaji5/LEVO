import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Should render Card Page", () => {
  describe("should validate APP", () => {
    it("Should validate snapshot", () => {
      const { baseElement } = render(<App />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
