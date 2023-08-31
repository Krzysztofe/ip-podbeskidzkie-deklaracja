import React, { createContext, FC, useState } from "react";
import useStepFormFormik from "../pages/steps/stepForm/stepFormFormik/useStepFormFormik";
import useHttp from "../pages/steps/stepsButtons/useHttp";
import useStepClauseFormik from "../pages/steps/stepClause/stepClauseForm/useStepClauseFormik";

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
  isCaptcha: boolean;
  setIsCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props: Props) => {
  const { formik, isSubmited } = useStepFormFormik();
  const { isLoading, error, sendRequest } = useHttp();
  const { formikClause, isConfirmed } = useStepClauseFormik();
  const [isCaptcha, setIsCaptcha] = useState(false);

  return (
    <StepsContext.Provider
      value={{
        formik,
        formikClause,
        isSubmited,
        isConfirmed,
        isLoading,
        isCaptcha,
        setIsCaptcha,
        error,
        sendRequest,
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
