import { create } from "zustand";
import { FormikErrors } from "formik";
import { ModelMember } from "../sharedModels/ModelMember";

type FormStore = {
  isSubmited: boolean;
  isError: {};
  setSubmited: (isSubmited: boolean) => void;
  setError: (isError: FormikErrors<ModelMember>) => void;
};

export const useFormStore = create<FormStore>(set => ({
  isSubmited: false,
  isError: {},
  setSubmited: isSubmited => {
    set(state => ({ isSubmited: isSubmited }));
  },
  setError: isError => {
    set(state => ({ isError: isError }));
  },
}));
