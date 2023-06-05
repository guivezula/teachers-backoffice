import mock_classes_data from "../../../__mock__/db.json";
import { MyClassesService } from "../my-class.service";

const myClasses = mock_classes_data["my-classes"];

test("my classes service", async () => {
  const spy = jest.spyOn(MyClassesService, "getAll");
  spy.mockResolvedValue(myClasses);
  const getAll = await MyClassesService.getAll();

  expect(spy).toHaveBeenCalled();
  expect(getAll).toBe(myClasses);

  spy.mockReset();
  spy.mockRestore();
});
