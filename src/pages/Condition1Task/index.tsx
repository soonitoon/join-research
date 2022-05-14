import { useEffect, useState } from "react";
import { Description, Layout } from "../../components";
import { descriptions } from "../../contents";
import fetchWords from "../../utils/fetchWords";
import ErrorPage from "../ErrorPage";

const Condition1Task = () => {
  const [words, setWords] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initializeWords = async () => {
      try {
        const options = { number: 5, length: 10 };
        const response = await fetchWords(options);

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
        <form>실험 로딩 성공!</form>
      ) : (
        <Description description={descriptions.loading} />
      )}
    </Layout>
  );
};

export default Condition1Task;
