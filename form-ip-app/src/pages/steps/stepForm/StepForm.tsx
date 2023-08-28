import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StepFormAlert from "./StepFormAlert";
import StepFormHeader from "./StepFormHeader";
import StepInputsContract from "./stepFormInputs/StepInputsContract";
import StepInputsDepartment from "./stepFormInputs/StepInputsDepartment";
import StepFormEployer from "./stepFormInputs/StepInputsEmployer";
import StepInputsMembership from "./stepFormInputs/StepInputsMembership";
import StepInputsUser from "./stepFormInputs/StepInputsUser";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";
import StepInputsWorktime from "./stepFormInputs/StepInputsWorktime";

const StepForm = () => {

  const dataComponents = [
    <StepInputsUser />,
    <StepFormEployer />,
    <StepInputsWorkplace />,
    <StepInputsContract />,
    <StepInputsWorktime />,
    <StepInputsDepartment />,
    <StepInputsMembership />,
  ];

  return (
    <Stack>
      <StepFormAlert />
      <StepFormHeader />
      {dataComponents.map((component, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              borderBottom: 1,
              borderColor: "info.light",
              paddingTop: "0.37rem",
              pb: 1,
            }}
          >
            {component}
          </Box>
        );
      })}
    </Stack>
  );
};

export default StepForm;
