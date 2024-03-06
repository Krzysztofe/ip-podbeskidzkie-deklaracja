import React, { createContext } from "react";

import useStepClauseFormik from "../pages/steps/stepClause/stepClauseForm/useStepClauseFormik";

type Props = {
  children: React.ReactNode;
};

type ContextType = {

  formikClause: ReturnType<typeof useStepClauseFormik>["formikClause"];
  isConfirmed: boolean;
};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props: Props) => {
  const { formikClause, isConfirmed } = useStepClauseFormik();

  return (
    <StepsContext.Provider
      value={{
        formikClause,

        isConfirmed,
      }}
    >
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
