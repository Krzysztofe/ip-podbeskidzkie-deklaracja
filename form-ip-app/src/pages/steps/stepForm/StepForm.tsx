import StepFormHeader from "./StepFormHeader";
import StepFormEployer from "./stepFormInputs/StepInputsEmployer";
import StepInputsUser from "./stepFormInputs/StepInputsUser";
import StepInputsWorkplace from "./stepFormInputs/StepInputsWorkplace";
import StepInputsConstract from "./stepFormInputs/StepInputsConstract";
import StepInputsWorktime from "./stepFormInputs/StepInputsWorktime";
import StepInputsDepartment from "./stepFormInputs/StepInputsDepartment";
import StepInputsMembership from "./stepFormInputs/StepInputsMembership";
import Stack from "@mui/material/Stack";
import StepFormAlert from "./StepFormAlert";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
const StepForm = () => {
  const theme = useTheme();

  const InputsContainer = styled(Box)({
    // borderBottom: `1px solid ${theme.palette.info.light}`,
    borderBottom: `1px solid black`,
    paddingTop: "0.37rem",
    paddingBottom: "1.5rem",
  });

  const dataComponents = [
    <StepInputsUser />,
    <StepFormEployer />,
    <StepInputsWorkplace />,
    <StepInputsConstract />,
    <StepInputsWorktime />,
    <StepInputsDepartment />,
    <StepInputsMembership />,
  ];

  return (
    <Stack>
      {/* <StepFormAlert /> */}
      <StepFormHeader />
      {/* {dataComponents.map(component => {
        return <InputsContainer>{component}</InputsContainer>;
      })} */}
      <InputsContainer>
        <StepInputsUser />,
      </InputsContainer>
    
      <StepFormEployer />,
      <StepInputsWorkplace />,
      <StepInputsConstract />,
      <StepInputsWorktime />,
      <StepInputsDepartment />,
      <StepInputsMembership />,
    </Stack>
  );
};

export default StepForm;
