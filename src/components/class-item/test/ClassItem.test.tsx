import { render, screen } from "@testing-library/react";
import mock_classes_data from "../../../../__mock__/db.json";
import { MyClass } from "../../../models/my-class.models";
import { ClassItem } from "../ClassItem";

describe("ClassItem", () => {
  let myClassMock: MyClass;
  beforeAll(() => {
    myClassMock = mock_classes_data["my-classes"][0];
  });

  it("should render title", () => {
    render(<ClassItem myClass={myClassMock} />);

    const title = screen.getByText(myClassMock.title);

    expect(title).toBeInTheDocument();
  });

  it("should render category", () => {
    render(<ClassItem myClass={myClassMock} />);

    const category = screen.getByText(myClassMock.category);

    expect(category).toBeInTheDocument();
  });
});
