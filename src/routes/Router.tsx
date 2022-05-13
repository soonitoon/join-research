import { Routes, Route } from "react-router-dom";
import { Main, Test } from "../pages";

const ROUTES_DATA = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
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
