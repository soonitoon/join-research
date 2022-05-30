import { useEffect, useState } from "react";
import { Description, Layout, Task1Form } from "../../../components";
import { descriptions } from "../../../contents";
import fetchWords from "../../../utils/fetchWords";
import ErrorPage from "../../ErrorPage";

const Task = () => {
  const [words, setWords] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initializeWords = async () => {
      try {
        const response = await fetchWords({
          number: 6,
          length: 6,
          lang: "it",
        });

        if (!response) throw new Error();

        setWords(response);
        setIsError(false);
        setIsLoaded(true);
      } catch {
        setIsError(true);
        setIsLoaded(false);
      }
    };

    initializeWords();
  }, []);

  if (isError)
    return <ErrorPage errorMessage={descriptions.error.dataLoadingError} />;

  return (
    <Layout>
      {isLoaded ? (
        <Task1Form {...{ words }} />
      ) : (
        <Description description={descriptions.loading} />
      )}
    </Layout>
  );
};

export default Task;
