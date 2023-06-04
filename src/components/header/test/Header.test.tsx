import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/minhas-aulas",
  }),
}));
describe("Header", () => {
  it("should render active list", () => {
    render(<Header />);

    const item = screen.getByTestId("link-item-1");

    expect(item).toHaveClass("text-blue-dark");
  });
});
