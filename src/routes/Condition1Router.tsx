import { Routes, Route } from "react-router-dom";
import { Condition1Description, Condition1Task } from "../pages";

const Condition1Router = () => {
  return (
    <Routes>
      <Route index element={<Condition1Description />} />
      <Route path="task" element={<Condition1Task />} />
    </Routes>
  );
};

export default Condition1Router;
