import { useEffect } from "react";
import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseSearch from "./components/CourseSearch";
import CourseValue from "./components/CourseValue";
import { calculateTotal } from "./store/slice/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { data } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [data]);
  return (
    <div className="container is-fluid">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <CourseValue />
    </div>
  );
}

export default App;
