import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const paraElement = screen.getByText(/App Component/i);
  expect(screen.getByTestId("App.Container")).toBeInTheDocument();
  expect(paraElement).toBeInTheDocument();
});
