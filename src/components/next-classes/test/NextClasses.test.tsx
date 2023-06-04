import { render, screen } from "@testing-library/react";
import mock_classes_data from "../../../../__mock__/db.json";
import { Schedule } from "../../../models/schedule.models";
import { NextClasses } from "../NextClasses";

describe("NextClasses", () => {
  let schedules: Schedule[];
  beforeAll(() => {
    schedules = mock_classes_data["schedules"];
  });

  it("should render list", () => {
    render(<NextClasses schedules={schedules} />);

    const itemsCount = screen.getByTestId("schedules-list-section").childNodes
      .length;

    expect(itemsCount).toBe(schedules.length);
  });

  it("should render subtitle", () => {
    render(<NextClasses schedules={schedules} />);

    const subtitle = screen.getByText("Hoje");

    expect(subtitle).toBeInTheDocument();
  });
});
