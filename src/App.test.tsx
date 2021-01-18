import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App Container Tests", () => {
  test("renders empty App Container", () => {
    render(<App />);
    const AppElement = screen.getByTestId("App");
    expect(AppElement).not.toBeEmptyDOMElement();
  });
});
