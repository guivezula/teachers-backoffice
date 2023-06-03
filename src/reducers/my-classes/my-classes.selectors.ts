import { RootState } from "../../app/store";

export const selectClasses = (state: RootState) => state.classes.myClasses;

export const selectViews = (state: RootState) =>
  state.classes.myClasses.map((c) => c.views);
