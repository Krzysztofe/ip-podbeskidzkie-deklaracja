import { initialValues as initialValuesInForm } from "./dataStepFormik";
import { validationSchema } from "./validationStepFormik";
import * as yup from "yup";
import { useFormStore } from "../../../../zustandStores/useFormStore";

const useFormikForm = () => {
  const setSubmited = useFormStore(state => state.setSubmited);

  const initialValues = initialValuesInForm;
  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;
  const onSubmit = () => {
    setSubmited(true);
  };

  return { onSubmit, initialValues, validation };
};

export default useFormikForm;
