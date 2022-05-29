import { Routes, Route } from "react-router-dom";
import { HomeDescription1, HomeDescription2 } from "../pages";

const HomeRouter = () => {
  return (
    <Routes>
      <Route index element={<HomeDescription1 />} />
      <Route path="/second" element={<HomeDescription2 />} />
    </Routes>
  );
};

export default HomeRouter;
