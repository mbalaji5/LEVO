import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from ".";

const props = { articles: [] };
const props1 = {
  articles: [
    {
      publishedAt: "2022-01-15T17:02:41.000Z",
      summary: "summary",
      title: "title",
      id: 0,
      url: "",
      imageUrl: "",
      newsSite: "",
      updatedAt: "",
      featured: false,
      launches: [],
      events: []
    }
  ]
};
describe("Should render home Page", () => {
  it("Should validate snapshot", () => {
    const { baseElement } = render(<Home {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
  it("Should validate element", () => {
    render(<Home {...props} />);
    const summaryElement = screen.getByText(/Welcome to LEVO article/i);
    expect(summaryElement).toBeInTheDocument();
    const buttonElement = screen.getByText(/Load More/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it("Should validate element", () => {
    render(<Home {...props1} />);
    const cardItem = screen.getAllByTestId("cardItem");
    expect(cardItem).toBeDefined();
  });
});
