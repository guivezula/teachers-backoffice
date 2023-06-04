import { render, screen } from "@testing-library/react";
import mock_classes_data from "../../../../__mock__/db.json";
import { MyClass } from "../../../models/my-class.models";
import { MyClassesList } from "../MyClassesList";

describe("MyClassesList", () => {
  let myClassesMock: MyClass[];
  beforeAll(() => {
    myClassesMock = mock_classes_data["my-classes"];
  });

  it("should render list", () => {
    render(<MyClassesList classes={myClassesMock} />);

    const itemsCount = screen.getByTestId("list-section").childNodes.length;

    expect(itemsCount).toBe(myClassesMock.length);
  });
});
