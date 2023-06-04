import { render, screen } from "@testing-library/react";
import { UserSettings } from "../UserSettings";

describe("UserSettings", () => {
  it("should render user name", () => {
    render(<UserSettings userAvatar="" userName="Annette Black" />);

    const name = screen.getByText("Annette Black");

    expect(name).toBeInTheDocument();
  });
});
