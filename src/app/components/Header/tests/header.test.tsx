import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../header";

describe("Header Tests", () => {
  it("Header Renders and Is Not Empty", () => {
    render(<Header />);
    const HeaderContainer = screen.getByTestId("Header");
    expect(HeaderContainer).not.toBeEmptyDOMElement();
  });
});
