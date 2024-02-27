import { create } from "zustand";

type FormStore = {
  count: number;

  increment: () => void;
  decrement: () => void;
};

export const useFormStore = create<FormStore>(set => ({
  count: 10,

  increment: () => {
    set(state => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set(state => ({ count: state.count - 1 }));
  },
}));
