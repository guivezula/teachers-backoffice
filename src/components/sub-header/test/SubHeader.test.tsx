import { render, screen } from "@testing-library/react";
import { SubHeader } from "../SubHeader";

describe("SubHeader", () => {
  let user: { avatarUrl: string; location: string; name: string };
  beforeAll(() => {
    user = {
      avatarUrl: "avatar",
      location: "Curitiba, PR",
      name: "Annette Black",
    };
  });

  it("should render time", () => {
    render(<SubHeader user={user} classStartIn={15} amount={1000} />);

    const classStartIn = screen.getByText("15 min.");

    expect(classStartIn).toBeInTheDocument();
  });

  it("should render amount", () => {
    render(<SubHeader user={user} classStartIn={15} amount={1000} />);

    const amount = screen.getByText("R$ 1000");

    expect(amount).toBeInTheDocument();
  });

  it("should render user name", () => {
    render(<SubHeader user={user} classStartIn={15} amount={1000} />);

    const name = screen.getByText(user.name);

    expect(name).toBeInTheDocument();
  });

  it("should render user location", () => {
    render(<SubHeader user={user} classStartIn={15} amount={1000} />);

    const location = screen.getByText(user.location);

    expect(location).toBeInTheDocument();
  });
});
