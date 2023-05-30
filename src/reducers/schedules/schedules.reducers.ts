import { createReducer } from "@reduxjs/toolkit";
import { Schedule } from "../../models/schedule.models";
import { fetchSchedules } from "./schedules.actions";

interface MyClassState {
  schedules: Schedule[];
}

const initialState: MyClassState = {
  schedules: [],
};

export const schedulesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchSchedules.pending, (state) => ({
    ...state,
    schedules: [],
  }));

  builder.addCase(fetchSchedules.rejected, (state) => ({
    ...state,
    schedules: [],
  }));

  builder.addCase(fetchSchedules.fulfilled, (state, action) => ({
    ...state,
    schedules: action.payload,
  }));
});
