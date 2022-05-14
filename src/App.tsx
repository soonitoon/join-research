import { useEffect, useState } from "react";
import { descriptions } from "./contents";
import useNetwork from "./hooks/useNetwork";
import { ErrorPage } from "./pages";
import Router from "./routes/Router";

const App = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const isOnline = useNetwork();

  useEffect(() => {
    const { width, height } = window.screen;
    setScreenSize({ width, height });
  }, []);

  if (screenSize.width > 500)
    return <ErrorPage errorMessage={descriptions.error.wideScreenError} />;

  if (!isOnline)
    return <ErrorPage errorMessage={descriptions.error.offlineError} />;

  return <Router />;
};

export default App;
