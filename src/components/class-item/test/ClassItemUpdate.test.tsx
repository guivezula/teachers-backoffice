import { render, screen } from "@testing-library/react";
import { ClassItemUpdate } from "../ClassItemUpdate";

describe("ClassItemUpdate", () => {
  it("should render update", () => {
    render(<ClassItemUpdate />);

    const text = screen.getByText("Editar");

    expect(text).toBeInTheDocument();
  });

  it("should render sm class", () => {
    render(<ClassItemUpdate smHidden />);

    const text = screen.getByText("Editar");

    expect(text).toHaveClass("max-sm:hidden");
  });

  it("should not render sm class", () => {
    render(<ClassItemUpdate />);

    const text = screen.getByText("Editar");

    expect(text).toHaveClass("sm:hidden");
  });
});
