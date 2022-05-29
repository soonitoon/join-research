import { Routes, Route } from "react-router-dom";
import { Description1, Description2 } from "../pages";

const HomeRouter = () => {
  return (
    <Routes>
      <Route index element={<Description1 />} />
      <Route path="/second" element={<Description2 />} />
    </Routes>
  );
};

export default HomeRouter;
