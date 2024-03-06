import { create } from "zustand";
import { ModelMember } from "../pages/steps/stepForm/stepFormFormik/dataStepFormik";
import { FormikErrors } from "formik";

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
