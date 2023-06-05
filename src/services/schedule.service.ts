import { Schedule } from "../models/schedule.models";

const getAll = async (): Promise<Schedule[]> =>
  await fetch(`${process.env.REACT_APP_API_URL}/schedules`).then((response) =>
    response.json()
  );

export const SchedulesService = {
  getAll,
};
