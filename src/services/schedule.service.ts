import axios from "../lib/axios";
import "../../__mock__/schedule";
import { Schedule } from "../models/schedule.module";

export const fetchSchedules = async (): Promise<Schedule[]> => {
    const response = await axios.get("/schedules/today");
    return response.data;
}