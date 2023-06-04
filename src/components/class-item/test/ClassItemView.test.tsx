import { render, screen } from "@testing-library/react";
import { ClassItemView } from "../ClassItemView";

describe("ClassItemView", () => {
  it("should render views", () => {
    render(<ClassItemView views={1000} />);

    const view = screen.getByTestId("view-item");

    expect(view).toBeInTheDocument();
    expect(view).toHaveTextContent("1000");
  });

  it("should render sm class", () => {
    render(<ClassItemView views={1000} smHidden />);

    const view = screen.getByTestId("view-item");

    expect(view).toHaveClass("max-sm:hidden");
  });

  it("should not render sm class", () => {
    render(<ClassItemView views={1000} />);

    const view = screen.getByTestId("view-item");

    expect(view).toHaveClass("sm:hidden");
  });
});
