import { Routes, Route } from "react-router-dom";
import { Test } from "../pages";
import Condition1Router from "./Condition1Router";
import HomeRouter from "./HomeRouter";

const ROUTES_DATA = [
  {
    path: "/*",
    element: <HomeRouter />,
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
