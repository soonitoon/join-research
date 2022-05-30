import { FetchWords } from "../types";

const URL = "https://random-word-api.herokuapp.com/word";

const fetchWords: FetchWords = async (options, timeout = 10000) => {
  const abortController = new AbortController();
  const id = setTimeout(() => abortController.abort(), timeout);

  let fullURL = URL;

  if (options) {
    const queryString =
      "?" +
      Object.keys(options)
        .map((key) => `${key}=${options[key as keyof typeof options]}`)
        .join("&");

    fullURL = URL + queryString;
  }

  const response = await fetch(fullURL, { signal: abortController.signal });
  const words: string[] = await response.json();
  clearTimeout(id);

  return words;
};

export default fetchWords;
