export type Description = {
  text: string;
  isStrong: boolean;
};

export type RandomWordsOption = {
  length?: number;
  number?: number;
  lang?: "it" | "de" | "zh" | "es";
};

export type FetchWords = (
  options?: RandomWordsOption,
  timeout?: number
) => Promise<string[]>;

export type GetRandomInt = (min: number, max: number) => number;

export type Task1Inputs = {
  email: string;
  password: string;
  name: string;
  age: string;
  school: string;
  petName: string;
  location: string;
};

export enum Condition2TextIndex {
  email = 0,
  password = 1,
  name = 2,
  school = 3,
  petName = 4,
  location = 5,
}
