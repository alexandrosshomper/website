import React from "react";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

test("renders application container", () => {
  const { container } = render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  expect(container.querySelector(".App")).toBeInTheDocument();
});
