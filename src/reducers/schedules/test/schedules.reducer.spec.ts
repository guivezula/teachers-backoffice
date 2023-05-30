import mock_classes_data from "../../../../__mock__/db.json";
import { Schedule } from "../../../models/schedule.models";
import { fetchSchedules } from "../schedules.actions";
import { schedulesReducer } from "../schedules.reducers";

const schedulesMock: Schedule[] = mock_classes_data["schedules"];


describe('Schedules Reducer', () => {
  it('should return the initial state', () => {
    expect(schedulesReducer(undefined, { type: undefined })).toEqual({
      schedules: [],
    });
  });

  it('should not change the schedules list on action pending', () => {
    const action = { type: fetchSchedules.pending };
    const state = schedulesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        schedules: [],
      }),
    );
  });

  it('should not change the schedules list on action rejected', () => {
    const action = { type: fetchSchedules.rejected };
    const state = schedulesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        schedules: [],
      }),
    );
  });

  it('should change the schedules list on action fulfilled', () => {
    const action = {
      type: fetchSchedules.fulfilled,
      payload: schedulesMock,
    };
    const state = schedulesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        schedules: schedulesMock
      }),
    );
  });
});
