import FormHeader from "../FormHeader";
import StepFormEployer from "./stepFormInputs/StepFormEployer";
import StepFormTopInputs from "./stepFormInputs/StepFormTopInputs";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";

const StepForm = () => {
  

  return (
    <>
      <FormHeader />
      <StepFormTopInputs />
      <StepFormEployer />
      <StepInputsWorkplace/>
    </>
  );
};

export default StepForm;
