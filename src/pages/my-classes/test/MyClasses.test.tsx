import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mock_classes_data from "../../../../__mock__/db.json";
import { store } from "../../../app/store";
import { MyClassesService } from "../../../services/my-class.service";
import { SchedulesService } from "../../../services/schedule.service";
import { MyClasses } from "../MyClasses";

jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => <div />,
}));

const myClasses = mock_classes_data["my-classes"];
const schedules = mock_classes_data["schedules"];

const mockMyClasses = jest.spyOn(MyClassesService, "getAll");
const mockSchedules = jest.spyOn(SchedulesService, "getAll");

describe("MyClasses page", () => {
  beforeAll(() => {
    mockMyClasses.mockResolvedValue(myClasses);
    mockSchedules.mockResolvedValue(schedules);
  });

  it("should render page", () => {
    render(
      <Provider store={store}>
        <MyClasses />
      </Provider>
    );

    const page = screen.getByTestId("my-classes-page");

    expect(page).toBeInTheDocument();
  });
});
