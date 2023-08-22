import { useFormik } from "formik";
import { useState } from "react";
import { ModelInitialValues, initialValues } from "./dataStepForm";
import { validationSchema } from "./validationStepForm";

const useStepFormFormik = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const formik = useFormik<ModelInitialValues>({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: () => {
      setIsSubmited(true);
    },
  });

  return { formik, isSubmited };
};

export default useStepFormFormik;
