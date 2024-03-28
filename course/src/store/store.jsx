import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slice/FormSlice";
import { courseReudcer } from "./slice/CourseSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    courses: courseReudcer,
  },
});
