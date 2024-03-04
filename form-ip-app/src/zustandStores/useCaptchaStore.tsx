import { create } from "zustand";

type FormStore = {
  isCaptcha: boolean;
  setChaptcha: (isCaptcha: boolean) => void;
};

export const useCaptchaStore = create<FormStore>(set => ({
  isCaptcha: false,
  setChaptcha: (isCaptcha) => {
    set(state => ({ isCaptcha: isCaptcha }));
  },
}));
