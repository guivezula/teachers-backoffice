import mock_classes_data from "../../../__mock__/db.json";
import { SchedulesService } from "../schedule.service";

const schedules = mock_classes_data["schedules"];

test("schedules service", async () => {
  const spy = jest.spyOn(SchedulesService, "getAll");
  spy.mockResolvedValue(schedules);
  const getAll = await SchedulesService.getAll();

  expect(spy).toHaveBeenCalled();
  expect(getAll).toBe(schedules);

  spy.mockReset();
  spy.mockRestore();
});
