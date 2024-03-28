import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../store/slice/CourseSlice";

const CourseSearch = () => {
  const { searchTerm } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  return (
    <div className="listHeader">
      <h3 className="title is-3">Sepet</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <div className="control">
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => {
              dispatch(changeSearch(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
