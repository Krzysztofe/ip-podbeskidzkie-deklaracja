import FormHeader from "../FormHeader";
import StepFormEployer from "./stepFormInputs/StepFormEployer";
import StepFormTopInputs from "./stepFormInputs/StepFormTopInputs";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";
import StepInputsConstract from "./stepFormInputs/StepInputsConstract";
import StepInputsWorktime from "./stepFormInputs/StepInputsWorktime";
import StepInputsDepartment from "./stepFormInputs/StepInputsDepartment";
import StepInputsMembership from "./stepFormInputs/StepInputsMembership";
import Stack from "@mui/material/Stack";
import StepFormAlert from "./StepFormAlert";

const StepForm = () => {
  return (
    <Stack spacing={2}>
      <StepFormAlert />
      <FormHeader />
      <StepFormTopInputs />
      <StepFormEployer />
      <StepInputsWorkplace />
      <StepInputsConstract />
      <StepInputsWorktime />
      <StepInputsDepartment />
      <StepInputsMembership />
    </Stack>
  );
};

export default StepForm;
