import Box from "@mui/material/Box";
import StepFormHeader from "./StepFormHeader";
import InputsRadio from "./stepFormInputs/InputsRadio";
import InputsRadioWithText from "./stepFormInputs/inputsRadioWithText/InputsRadioWithText";
import InputsTexts from "./stepFormInputs/InputsTexts";
import { dataEmployerInputs } from "./dataStepForm";
import { dataUserInputs } from "./dataStepForm";
import { dataAdressInputs } from "./dataStepForm";
import { dataWorkplaceInputs } from "./dataStepForm";
import { dataContractInpts } from "./dataStepForm";
import { dataWorkTimeInputs } from "./dataStepForm";
import { dataMembershipInputs } from "./dataStepForm";
import { dataDepartmentInputs } from "./dataStepForm";

const StepForm = () => {
  const dataInputs = [
    // <InputsTexts headingText="Twoje dane:" inputsData={dataUserInputs} />,
    // <InputsTexts headingText="Twój adres:" inputsData={dataAdressInputs} />,

    // <InputsRadioWithText
    //   headingText="Pracodawca:"
    //   inputsData={dataEmployerInputs}
    //   radioValue="employer"
    //   textValue="employerOther"
    // />,

    // <InputsRadioWithText
    //   headingText="Miejsce Pracy:"
    //   inputsData={dataWorkplaceInputs}
    //   radioValue="workplace"
    //   textValue="workplaceOther"
    // />,

    // <InputsRadio
    //   headingText="Umowa:"
    //   inputsData={dataContractInpts}
    //   inputValue="contract"
    // />,
    // <InputsRadioWithText
    //   headingText="Wymiar czasu pracy"
    //   inputsData={dataWorkTimeInputs}
    //   radioValue="workTime"
    //   textValue="workTimeOther"
    // />,

    <InputsRadio
      headingText="Przynależność do innych związków zawodowych:"
      inputsData={dataMembershipInputs}
      inputValue="membership"
      membership={true}
    />,

    <InputsTexts headingText="Dział:" inputsData={dataDepartmentInputs} />,
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
