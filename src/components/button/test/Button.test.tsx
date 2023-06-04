import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("should have label", () => {
    render(<Button label="any label" />);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("any label");
  });

  it("should have default color", () => {
    render(<Button label="any label" />);

    const btn = screen.getByRole("button");

    expect(btn).toHaveClass("bg-blue-dark");
  });

  it("should have custom color", () => {
    render(<Button label="any label" color="bg-orange-dark" />);

    const btn = screen.getByRole("button");

    expect(btn).toHaveClass("bg-orange-dark");
  });

  it("should have full width", () => {
    render(<Button label="any label" expand />);

    const btn = screen.getByRole("button");

    expect(btn).toHaveClass("w-full");
  });
});
