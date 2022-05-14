import { Routes, Route } from "react-router-dom";
import { Main, Test } from "../pages";
import Condition1Router from "./Condition1Router";

const ROUTES_DATA = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/condition1/*",
    element: <Condition1Router />,
  },
];

const Router = () => {
  return (
    <Routes>
      {ROUTES_DATA.map(({ path, element }) => (
        <Route key={path} {...{ path, element }} />
      ))}
    </Routes>
  );
};

export default Router;
