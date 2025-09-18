import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders the application layout", () => {
  const { container } = render(<App />);
  const appRoot = container.querySelector(".App");
  expect(appRoot).toBeInTheDocument();
});
