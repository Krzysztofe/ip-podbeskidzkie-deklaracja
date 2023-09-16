import Box from "@mui/material/Box";
import StepFormHeader from "./StepFormHeader";
import InputsContract from "./stepFormInputs/InputsContract";
import InputsDepartment from "./stepFormInputs/InputsDepartment";
import InputsEployer from "./stepFormInputs/InputsEmployer";
import InputsMembership from "./stepFormInputs/InputsMembership";
import InputsUser from "./stepFormInputs/InputsUser";
import InputsWorkplace from "./stepFormInputs/InputsWorkplace";
import InputsWorktime from "./stepFormInputs/InputsWorktime";
import { v4 as UUID } from "uuid";


const StepForm = () => {
  const dataInputs = [
    <InputsUser />,
    <InputsEployer />,
    <InputsWorkplace />,
    <InputsContract />,
    <InputsWorktime />,
    <InputsDepartment />,
    <InputsMembership />,
  ];

  return (
    <>
      <StepFormHeader />
      {dataInputs.map((input, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              borderBottom: 1,
              borderColor: "info.light",
              pt: { xs: 1, sm: 2.4 },
              pb: { xs: 0, sm: 2.3 },
            }}
          >
            {input}
          </Box>
        );
      })}
    </>
  );
};

export default StepForm;
