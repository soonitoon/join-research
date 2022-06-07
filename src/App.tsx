import { useEffect, useState } from "react";
import { descriptions } from "./contents";
import useNetwork from "./hooks/useNetwork";
import useStore from "./hooks/useStore";
import { OnlyTextPage } from "./pages";
import Router from "./routes/Router";
import fetchWords from "./utils/fetchWords";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const isOnline = useNetwork();
  const [width, height] = useStore((state) => state.screenSize);
  const setScreenSize = useStore((state) => state.setScreenSize);
  const setRandomWords = useStore((state) => state.setRandomWords);

  useEffect(() => {
    const initializeWords = async () => {
      try {
        const response = await fetchWords({
          number: 6,
          length: 6,
          lang: "it",
        });

        if (!response) throw new Error();

        setRandomWords(response);
        setIsError(false);
        setIsLoaded(true);
      } catch {
        setIsError(true);
        setIsLoaded(false);
      }
    };

    setScreenSize([window.screen.width, window.screen.height]);
    initializeWords();
  }, []);

  if (!isOnline)
    return (
      <OnlyTextPage
        type="error"
        description={descriptions.error.offlineError}
      />
    );

  if (width > 500)
    return (
      <OnlyTextPage
        type="error"
        description={descriptions.error.wideScreenError}
      />
    );

  if (isError)
    return (
      <OnlyTextPage
        type="error"
        description={descriptions.error.dataLoadingError}
      />
    );

  if (!isLoaded)
    return (
      <OnlyTextPage type="description" description={descriptions.loading} />
    );

  return <Router />;
};

export default App;
