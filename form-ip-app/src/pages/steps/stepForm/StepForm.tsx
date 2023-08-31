import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StepFormAlert from "./StepFormAlert";
import StepFormHeader from "./StepFormHeader";
import InputsContract from "./stepFormInputs/InputsContract";
import InputsDepartment from "./stepFormInputs/InputsDepartment";
import InputsEployer from "./stepFormInputs/InputsEmployer";
import InputsMembership from "./stepFormInputs/InputsMembership";
import InputsUser from "./stepFormInputs/InputsUser";
import InputsWorkplace from "./stepFormInputs/InputsWorkplace";
import InputsWorktime from "./stepFormInputs/InputsWorktime";

const StepForm = () => {
  const dataComponents = [
    <InputsUser />,
    <InputsEployer />,
    <InputsWorkplace />,
    <InputsContract />,
    <InputsWorktime />,
    <InputsDepartment />,
    <InputsMembership />,
  ];

  return (
    <Box>
      <StepFormAlert />
      <StepFormHeader />
      {dataComponents.map((component, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              borderBottom: 1,
              borderColor: "info.light",
              pt: { xs: 1, sm: 2 },
              pb: { xs: 2, sm: 2 },
            }}
          >
            {component}
          </Box>
        );
      })}
    </Box>
  );
};

export default StepForm;
