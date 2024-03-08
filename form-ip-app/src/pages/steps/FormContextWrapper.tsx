import React from "react";
import { Form, Formik } from "formik";
import useFormikForm from "./stepForm/stepFormFormik/useFormikForm";
import useFormikClause from "./stepClause/stepClauseForm/useFormikClause";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";

type Props = {
  children: React.ReactNode;
};

const FormContextWrapper = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  console.log("", currentStepIdx);

  const {
    initialValues: valuesForm,
    validation: validationForm,
    onSubmit: onSubmitForm,
  } = useFormikForm();
  const { validation: validationClause, onSubmit: onSubmitClause } =
    useFormikClause();

  if (currentStepIdx > 2) return null;

  return (
    <Formik
      initialValues={valuesForm}
      validationSchema={
        currentStepIdx === 0 ? validationForm : validationClause
      }
      onSubmit={currentStepIdx === 0 ? onSubmitForm : onSubmitClause}
    >
      <Form
        style={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        {props.children}
      </Form>
    </Formik>
  );
};

export default FormContextWrapper;
