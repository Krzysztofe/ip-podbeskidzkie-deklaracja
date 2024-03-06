import create from "zustand";
import { useFormik } from "formik";
import { validationSchemaClause } from "../pages/steps/stepClause/stepClauseForm/validationStepClauseForm";
import { FormikValues } from "formik";

type FormStore = {
  isConfirmed: boolean;
  formikClausex: ReturnType<typeof useFormik>;
};

const useClauseStore = create<FormStore>(set => ({
  isConfirmed: false,
  formikClausex: useFormik<FormikValues>({
    initialValues: { confirmation: false },
    validationSchema: validationSchemaClause,
    onSubmit: () => {
      set({ isConfirmed: true });
    },
  }),
}));

export default useClauseStore;

