import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us test case", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load  button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load  input name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
  });
});
