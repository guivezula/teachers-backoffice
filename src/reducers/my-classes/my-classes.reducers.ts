import { createReducer } from "@reduxjs/toolkit";
import { MyClass } from "../../models/my-class.models";
import { fetchMyClasses } from "./my-classes.actions";

interface MyClassState {
  myClasses: MyClass[];
}

const initialState: MyClassState = {
  myClasses: [],
};

export const classesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMyClasses.pending, (state) => ({
    ...state,
    myClasses: [],
  }));

  builder.addCase(fetchMyClasses.rejected, (state) => ({
    ...state,
    myClasses: [],
  }));

  builder.addCase(fetchMyClasses.fulfilled, (state, action) => ({
    ...state,
    myClasses: action.payload,
  }));
});
