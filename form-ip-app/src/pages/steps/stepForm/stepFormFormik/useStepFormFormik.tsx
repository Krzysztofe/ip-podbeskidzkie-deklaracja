import { useFormik } from "formik";
import { useState } from "react";
import { InitialValues, initialValues } from "./dataStepFormik";
import { validationSchema } from "./validationStepFormik";

const useStepFormFormik = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik<InitialValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: () => {
      setIsSubmited(true);
    },
  });

  return { formik, isSubmited };
};

export default useStepFormFormik;
