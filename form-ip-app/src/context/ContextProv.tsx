import React, { createContext, FC, useState } from "react";
import useStepFormFormik from "../pages/steps/stepForm/hooks/useStepFormFormik";
import useHttp from "../pages/steps/stepForm/hooks/useHttp";
import useStepClauseFormik from "../pages/steps/stepForm/hooks/useStepClauseFormik";

interface Props {
  children: React.ReactNode;
}

export type ContextType = {
  formik: ReturnType<typeof useStepFormFormik>["formik"];
  formikClause: ReturnType<typeof useStepClauseFormik>["formikClause"];
  isSubmited: boolean;
  isConfirmed: boolean;
  isLoading: boolean;
  error: any;
  sendRequest: any;
};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props: Props) => {
  const { formik, isSubmited } = useStepFormFormik();
  const { isLoading, error, sendRequest } = useHttp();
  const { formikClause, isConfirmed } = useStepClauseFormik();

  return (
    <StepsContext.Provider
      value={{
        formik,
        formikClause,
        isSubmited,
        isConfirmed,
        isLoading,
        error,
        sendRequest,
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
