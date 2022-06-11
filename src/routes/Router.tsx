import { Routes, Route } from "react-router-dom";
import { Personal, Test, End } from "../pages";
import Condition1Router from "./Condition1Router";
import Condition2Router from "./Condition2Router";
import HomeRouter from "./HomeRouter";

const ROUTES_DATA = [
  {
    path: "/*",
    element: <HomeRouter />,
  },
  {
    path: "/personal",
    element: <Personal />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/condition1/*",
    element: <Condition1Router />,
  },
  {
    path: "/condition2/*",
    element: <Condition2Router />,
  },
  {
    path: "/end",
    element: <End />,
  },
];

const Router = () => {
  return (
    <Routes>
      {ROUTES_DATA.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default Router;
