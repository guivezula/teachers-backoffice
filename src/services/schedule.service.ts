import { Schedule } from "../models/schedule.models";

export const fetchSchedules = async (): Promise<Schedule[]> =>  
await fetch(`${process.env.REACT_APP_API_URL}/schedules`).then((response) => response.json());