import { render, screen } from "@testing-library/react";
import { Divider } from "../Divider";

describe("Divider", () => {
  it("should render divider", () => {
    render(<Divider />);

    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
  });
});
