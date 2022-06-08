import create from "zustand";
import { GlobalState } from "../types";

const useStore = create<GlobalState>((set, get) => ({
  firtsTask: "condition1",
  personalInformation: "",
  screenSize: [0, 0],
  typingSpeedMs: 0,
  randomWords: [],
  condition1Data: { elapsedTimeMs: 0, errorCount: 0, touchCount: 0 },
  condition2Data: { elapsedTimeMs: 0, errorCount: 0, touchCount: 0 },

  setFirstTask: (order) => set({ firtsTask: order }),
  setPersonalInformation: (info) => set({ personalInformation: info }),
  setScreenSize: (size) => set({ screenSize: size }),
  setTypingSpeedMs: (speed) => set({ typingSpeedMs: speed }),
  setRandomWords: (words) => set({ randomWords: words }),
  setCondition1Data: (data) =>
    set({ condition1Data: { ...get().condition1Data, ...data } }),
  setCondition2Data: (data) =>
    set({ condition2Data: { ...get().condition2Data, ...data } }),
}));

export default useStore;
