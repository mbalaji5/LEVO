import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from ".";

const props = {
  article: {
    publishedAt: "2022-01-15T17:02:41.000Z",
    summary: "summary",
    title: "",
    id: 0,
    url: "",
    imageUrl: "",
    newsSite: "",
    updatedAt: "",
    featured: false,
    launches: [],
    events: []
  }
};
describe("Should render Card component", () => {
  it("Should validate snapshot", () => {
    const { container, baseElement } = render(<Card {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("Should validate element", () => {
    render(<Card {...props} />);
    const buttonElement = screen.getByText(/Read More/i);
    expect(buttonElement).toBeInTheDocument();
    const summaryElement = screen.getByText(/summary/i);
    expect(summaryElement).toBeInTheDocument();
  });
});
