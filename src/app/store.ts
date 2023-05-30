import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { classesReducer } from '../reducers/my-classes/my-classes.reducers';
import { schedulesReducer } from '../reducers/schedules/schedules.reducers';

export const store = configureStore({
  reducer: {
    classes: classesReducer,
    schedules: schedulesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
