import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../store/slice/CourseSlice";

const CourseList = () => {
  const { courses } = useSelector(({ form, courses: { searchTerm, data } }) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      courses: filteredData,
    };
  });
  const dispatch = useDispatch();
  return (
    <div className="courseList">
      {courses.map((course) => {
        return (
          <div key={course.id} className="panel">
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>{course.cost}</p>
            <button
              onClick={() => {
                dispatch(deleteCourse(course.id));
              }}
              className="button is-danger"
            >
              Sil
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
