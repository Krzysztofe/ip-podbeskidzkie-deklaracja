import React, { createContext, useState } from "react";

import StepClause from "../pages/steps/stepClause/StepClause";
import useStepClauseFormik from "../pages/steps/stepClause/stepClauseForm/useStepClauseFormik";
import StepConfirmation from "../pages/steps/stepConfirmation/StepConfirmation";
import StepForm from "../pages/steps/stepForm/StepForm";
import useStepFormFormik from "../pages/steps/stepForm/stepFormFormik/useStepFormFormik";
import StepSummary from "../pages/steps/stepSummary/StepSummary";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  formik: ReturnType<typeof useStepFormFormik>["formik"];
  formikClause: ReturnType<typeof useStepClauseFormik>["formikClause"];
  isSubmited: boolean;
  isConfirmed: boolean;

};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props: Props) => {
  const { formik, isSubmited } = useStepFormFormik();
  const { formikClause, isConfirmed } = useStepClauseFormik();
 
  return (
    <StepsContext.Provider
      value={{
        formik,
        formikClause,
        isSubmited,
        isConfirmed,
      
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
