import { render, screen } from "@testing-library/react";
import { ClassItemDate } from "../ClassItemDate";

describe("ClassItemDate", () => {
  it("should render date", () => {
    render(<ClassItemDate date="2023-01-23" />);

    const date = screen.getByText("23 janeiro 2023");

    expect(date).toBeInTheDocument();
  });

  it("should render date as time ago", () => {
    const d = new Date();
    const dateString = `${d.getFullYear()}-${d.getMonth() + 1}-${
      d.getDate() + 3
    }`;
    render(<ClassItemDate date={dateString} />);

    const date = screen.getByText("3 dias atrás");

    expect(date).toBeInTheDocument();
  });

  it("should render date as today", () => {
    const d = new Date();
    const dateString = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    render(<ClassItemDate date={dateString} />);

    const date = screen.getByText("hoje");

    expect(date).toBeInTheDocument();
  });

  it("should render date as yesterday", () => {
    const d = new Date();
    const dateString = `${d.getFullYear()}-${d.getMonth() + 1}-${
      d.getDate() - 1
    }`;
    render(<ClassItemDate date={dateString} />);

    const date = screen.getByText("ontém");

    expect(date).toBeInTheDocument();
  });
  it("should render sm class", () => {
    render(<ClassItemDate date="2023-01-23" smHidden />);

    const date = screen.getByText("23 janeiro 2023");

    expect(date).toHaveClass("max-sm:hidden");
  });
  it("should not render sm class", () => {
    render(<ClassItemDate date="2023-01-23" />);

    const date = screen.getByText("23 janeiro 2023");

    expect(date).toHaveClass("sm:hidden");
  });
});
