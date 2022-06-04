import { Routes, Route } from "react-router-dom";
import { Condition2Description, Condition2Task } from "../pages";

const Condition1Router = () => {
  return (
    <Routes>
      <Route index element={<Condition2Description />} />
      <Route path="task" element={<Condition2Task />} />
    </Routes>
  );
};

export default Condition1Router;
