import React from "react";
import { useSelector } from "react-redux";

const CourseValue = () => {
  const { total } = useSelector((state) => state.courses);

  return <div>Toplam Tutar: {total} TL</div>;
};

export default CourseValue;
