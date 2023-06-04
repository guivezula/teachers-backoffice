import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Card", () => {
  it("should have title", () => {
    render(<Card children={<></>} title="any title" />);

    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("any title");
  });

  it("should have info icon", () => {
    render(<Card children={<></>} title="any title" info />);

    const card = screen.getByTestId("info-icon");

    expect(card).toBeInTheDocument();
  });

  it("should not have info icon", () => {
    render(<Card children={<></>} title="any title" />);

    const card = screen.queryByTestId("info-icon");

    expect(card).not.toBeInTheDocument();
  });

  it("should have button", () => {
    render(
      <Card children={<></>} title="any title" buttonLabel="any button" />
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("any button");
  });

  it("should not have button", () => {
    render(<Card children={<></>} title="any title" />);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });

  it("should have children", () => {
    render(<Card children={<div>Any children</div>} title="any title" />);

    const card = screen.getByTestId("card");

    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Any children");
  });
});
