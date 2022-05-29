import { useEffect, useState } from "react";
import { Description, InputWithText, Layout } from "../../../components";
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
          number: 5,
          length: 10,
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
        <form>
          <InputWithText
            value={""}
            onChange={() => ""}
            sample={`${words[0]}@gmail.com`}
            placeholder="이메일"
          />
        </form>
      ) : (
        <Description description={descriptions.loading} />
      )}
    </Layout>
  );
};

export default Task;
