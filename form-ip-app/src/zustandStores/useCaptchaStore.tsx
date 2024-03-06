import { create } from "zustand";

type CaptchaStore = {
  isCaptcha: boolean;
  setChaptcha: (isCaptcha: boolean) => void;
};

export const useCaptchaStore = create<CaptchaStore>(set => ({
  isCaptcha: false,
  setChaptcha: isCaptcha => {
    set(state => ({ isCaptcha: isCaptcha }));
  },
}));
