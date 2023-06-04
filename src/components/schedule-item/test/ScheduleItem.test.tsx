import { render, screen } from "@testing-library/react";
import mock_classes_data from "../../../../__mock__/db.json";
import { Schedule } from "../../../models/schedule.models";
import { ScheduleItem } from "../ScheduleItem";

describe("ScheduleItem", () => {
  let schedule: Schedule;
  beforeAll(() => {
    schedule = mock_classes_data["schedules"][0];
  });
  it("should have time", () => {
    render(<ScheduleItem schedule={schedule} />);

    const time = screen.getByText(schedule.time);

    expect(time).toBeInTheDocument();
    expect(time).toHaveTextContent(schedule.time);
  });

  it("should have title", () => {
    render(<ScheduleItem schedule={schedule} />);

    const title = screen.getByText(schedule.title);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(schedule.title);
  });
});
