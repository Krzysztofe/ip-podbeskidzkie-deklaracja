import StepFormHeader from "./StepFormHeader";
import StepFormEployer from "./stepFormInputs/StepInputsEmployer";
import StepInputsUser from "./stepFormInputs/StepInputsUser";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";
import StepInputsContract from "./stepFormInputs/StepInputsContract";
import StepInputsWorktime from "./stepFormInputs/StepInputsWorktime";
import StepInputsDepartment from "./stepFormInputs/StepInputsDepartment";
import StepInputsMembership from "./stepFormInputs/StepInputsMembership";
import Stack from "@mui/material/Stack";
import StepFormAlert from "./StepFormAlert";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
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
      {/* <StepFormAlert /> */}
      <StepFormHeader />
      {dataComponents.map(component => {
        return (
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "info.light",
              paddingTop: "0.37rem",
              paddingBottom: "1.5rem",
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
