import { createAsyncThunk } from '@reduxjs/toolkit';
import { Schedule } from '../../models/schedule.models';
import { SchedulesService } from '../../services/schedule.service';

export const fetchSchedules = createAsyncThunk<Schedule[]>(
  'schedules/fetchSchedules',
  SchedulesService.getAll,
);