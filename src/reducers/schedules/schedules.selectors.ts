import { RootState } from "../../app/store";

export const selectSchedules = (state: RootState) => state.schedules.schedules;