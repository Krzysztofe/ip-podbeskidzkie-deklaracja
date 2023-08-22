import { useFormik } from "formik";
import { useState } from "react";
import { validationSchemaClause } from "./validationStepClauseForm";

const useStepClauseFormik = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const formikClause = useFormik<any>({
    initialValues: { confirmation: false },
    validationSchema: validationSchemaClause,
    onSubmit: () => {
      setIsConfirmed(true);
    },
  });

  return { formikClause, isConfirmed };
};

export default useStepClauseFormik;
