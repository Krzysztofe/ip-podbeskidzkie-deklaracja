import React, { createContext, FC, useState } from "react";
import useStepFormFormik from "../pages/steps/stepForm/useStepFormFormik";


interface Props {
  children: React.ReactNode;
}


export type ContextType = {
  formik: ReturnType<typeof useStepFormFormik>["formik"];
  isSubmited: boolean;
};

export const StepsContext = createContext<ContextType>({} as ContextType);

const StepsContextProv = (props:Props) => {

 const { formik, isSubmited } = useStepFormFormik();

  return (
      <StepsContext.Provider value={{  formik , isSubmited }}>
      {props.children}
    </StepsContext.Provider>
  );
};

export default StepsContextProv;
