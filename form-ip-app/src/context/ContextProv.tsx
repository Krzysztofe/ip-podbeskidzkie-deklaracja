import React, { createContext, useState } from "react";
import useMultistepForm from "../pages/steps/indexSteps/useMultistepForm";
import StepClause from "../pages/steps/stepClause/StepClause";
import useStepClauseFormik from "../pages/steps/stepClause/stepClauseForm/useStepClauseFormik";
import StepConfirmation from "../pages/steps/stepConfirmation/StepConfirmation";
import StepForm from "../pages/steps/stepForm/StepForm";
import useStepFormFormik from "../pages/steps/stepForm/stepFormFormik/useStepFormFormik";
import useHttp from "../services/useHttp";
import StepSummary from "../pages/steps/stepSummary/StepSummary";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  formik: ReturnType<typeof useStepFormFormik>["formik"];
  formikClause: ReturnType<typeof useStepClauseFormik>["formikClause"];
  isSubmited: boolean;
  isConfirmed: boolean;
  isLoading: boolean;
  error: any;
  sendRequest: (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  isCaptcha: boolean;
  setIsCaptcha: React.Dispatch<React.SetStateAction<boolean>>;
  steps: JSX.Element[];
  currentStepIdx: number;
  isLastStep: boolean;
  step: JSX.Element;
  back: () => void;
  next: () => void;
};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props: Props) => {
  const { formik, isSubmited } = useStepFormFormik();
  const { formikClause, isConfirmed } = useStepClauseFormik();
  const { isLoading, error, sendRequest } = useHttp();
  const [isCaptcha, setIsCaptcha] = useState(false);
  const { steps, currentStepIdx, step, back, next, isLastStep } =
    useMultistepForm([
      // <StepForm />,
      // <StepClause />,
      // <StepSummary />,
      <StepConfirmation />,
    ]);

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
        steps,
        currentStepIdx,
        isLastStep,
        step,
        back,
        next,
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
