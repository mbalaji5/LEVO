import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeContainer } from ".";

describe("Should render home Page", () => {
  describe("should validate APP", () => {
    it("Should validate snapshot", () => {
      const { baseElement } = render(<HomeContainer />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});
