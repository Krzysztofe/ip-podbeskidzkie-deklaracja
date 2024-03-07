import React from "react";
import { Form, Formik } from "formik";
import useFormikForm from "./stepForm/stepFormFormik/useFormikForm";
import useFormikClause from "./stepClause/stepClauseForm/useFormikClause";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import { rwd } from "../../utils/rwd";

type Props = {
  children: React.ReactNode;
};

const FormContextWrapper = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const height =
    currentStepIdx === 0
      ? rwd("calc(100% - 120px)", "calc(100% - 90px)")
      : rwd("calc(100% - 120px - 74px)", "calc(100% - 90px - 72px)");

  const {
    initialValues: valuesForm,
    validation: validationForm,
    onSubmit: onSubmitForm,
  } = useFormikForm();
  const { validation: validationClause, onSubmit: onSubmitClause } =
    useFormikClause();

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
