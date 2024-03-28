import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    searchTerm: "",
    data: [],
    total: 0,
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    deleteCourse(state, action) {
      state.data = state.data?.filter((course) => action.payload !== course.id);
    },
    calculateTotal(state) {
      let total = 0;
      state.data.forEach((item) => {
        total += item.cost;
      });
      state.total = total;
    },
    changeSearch(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addCourse, deleteCourse, calculateTotal, changeSearch } =
  courseSlice.actions;
export const courseReudcer = courseSlice.reducer;
