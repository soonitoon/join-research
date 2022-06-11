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

export type PersonalInformationInputs = { birth: string; phone: string };

export enum Condition1TextIndex {
  email = 0,
  password = 1,
  name = 2,
  school = 3,
  petName = 4,
  location = 5,
}

export enum Condition2TextIndex {
  email = 6,
  password = 7,
  name = 8,
  school = 9,
  petName = 10,
  location = 11,
}

export type TaskData = {
  elapsedTimeMs: number;
  touchCount: number;
};

export type FirstTask = "condition1" | "condition2";

export type GlobalState = {
  firtsTask: FirstTask;
  personalInformation: string;
  screenSize: [number, number];
  typingSpeedMs: number;
  randomWords: string[];
  condition1Data: TaskData;
  condition2Data: TaskData;
  setFirstTask: (order: FirstTask) => void;
  setPersonalInformation: (info: string) => void;
  setScreenSize: (size: [number, number]) => void;
  setTypingSpeedMs: (speed: number) => void;
  setRandomWords: (words: string[]) => void;
  setCondition1Data: (data: Partial<TaskData>) => void;
  setCondition2Data: (data: Partial<TaskData>) => void;
};
