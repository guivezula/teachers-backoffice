import mock_classes_data from "../../../../__mock__/db.json";
import { MyClass } from "../../../models/my-class.models";
import { fetchMyClasses } from "../my-classes.actions";
import { classesReducer } from "../my-classes.reducers";

describe("My Classes Reducer", () => {
  let myClassesMock: MyClass[];
  beforeAll(() => {
    myClassesMock = mock_classes_data["my-classes"];
  });

  it("should return the initial state", () => {
    expect(classesReducer(undefined, { type: undefined })).toEqual({
      myClasses: [],
    });
  });

  it("should not change the classes list on action pending", () => {
    const action = { type: fetchMyClasses.pending };
    const state = classesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        myClasses: [],
      })
    );
  });

  it("should not change the classes list on action rejected", () => {
    const action = { type: fetchMyClasses.rejected };
    const state = classesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        myClasses: [],
      })
    );
  });

  it("should change the classes list on action fulfilled", () => {
    const action = {
      type: fetchMyClasses.fulfilled,
      payload: myClassesMock,
    };
    const state = classesReducer(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        myClasses: myClassesMock,
      })
    );
  });
});
