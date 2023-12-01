import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TextStoreState {
  text: string[];
  setText(val: string[]): void;
}

export const useTextStore = create<TextStoreState>()(
  persist(
    (set) => ({
      text: [],
      setText: (val: string[]) =>
        set(() => ({
          val,
        })),
    }),
    {
      name: "textStore",
    },
  ),
);
