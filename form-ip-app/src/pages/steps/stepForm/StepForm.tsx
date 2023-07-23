import FormHeader from "../FormHeader";
import StepFormEployer from "./stepFormInputs/StepFormEployer";
import StepFormTopInputs from "./stepFormInputs/StepFormTopInputs";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";
import StepInputsConstract from "./stepFormInputs/StepInputsConstract";
import StepInputsWorktime from "./stepFormInputs/StepInputsWorktime";
import StepInputsDepartment from "./stepFormInputs/StepInputsDepartment";
import StepInputsMembership from "./stepFormInputs/StepInputsMembership";

const StepForm = () => {
  return (
    <>
      <FormHeader />
      <StepFormTopInputs />
      <StepFormEployer />
      <StepInputsWorkplace />
      <StepInputsConstract />
      <StepInputsWorktime />
      <StepInputsDepartment />
      <StepInputsMembership />
    </>
  );
};

export default StepForm;
