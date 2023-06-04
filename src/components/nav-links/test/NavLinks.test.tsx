import { render, screen } from "@testing-library/react";
import { NavLinks } from "../NavLinks";

describe("MyClassesList", () => {
  let links: string[];
  beforeAll(() => {
    links = ["dashboard", "minhas aulas", "alunos"];
  });

  it("should render list", () => {
    render(<NavLinks links={links} />);

    const itemsCount =
      screen.getByTestId("link-section-list").childNodes.length;

    expect(itemsCount).toBe(links.length);
  });

  it("should render active list", () => {
    render(<NavLinks links={links} activeLink={links[1]} />);

    const item = screen.getByTestId("link-item-1");

    expect(item).toHaveClass("text-blue-dark");
  });
});
