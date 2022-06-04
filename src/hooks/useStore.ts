import create from "zustand";

type TaskData = {
  elapsedTimeMs: number;
  errorCount: number;
  touchCount: number;
};

type GlobalState = {
  personalInformation: string;
  screenSize: [number, number];
  typingSpeedMs: number;
  randomWords: string[];
  condition1Data: TaskData;
  condition2Data: TaskData;

  setPersonalInformation: (info: string) => void;
  setScreenSize: (size: [number, number]) => void;
  setTypingSpeedMs: (speed: number) => void;
  setRandomWords: (words: string[]) => void;
  setCondition1Data: (data: TaskData) => void;
  setCondition2Data: (data: TaskData) => void;
};

const useStore = create<GlobalState>((set) => ({
  personalInformation: "",
  screenSize: [0, 0],
  typingSpeedMs: 0,
  randomWords: [],
  condition1Data: { elapsedTimeMs: 0, errorCount: 0, touchCount: 0 },
  condition2Data: { elapsedTimeMs: 0, errorCount: 0, touchCount: 0 },

  setPersonalInformation: (info) => set({ personalInformation: info }),
  setScreenSize: (size) => set({ screenSize: size }),
  setTypingSpeedMs: (speed) => set({ typingSpeedMs: speed }),
  setRandomWords: (words) => set({ randomWords: words }),
  setCondition1Data: (data) => set({ condition1Data: data }),
  setCondition2Data: (data) => set({ condition2Data: data }),
}));

export default useStore;
