import Box from "@mui/material/Box";
import StepFormHeader from "./StepFormHeader";
import InputsRadio from "../../../components/formInputs/InputsRadio";
import InputsRadioWithText from "../../../components/formInputs/inputsRadioWithText/InputsRadioWithText";
import InputsTexts from "../../../components/formInputs/inputsText/InputsTexts";
import { dataEmployerInputs } from "./dataFormMember";
import { dataParsonalInputs } from "./dataFormMember";
import { dataAdressInputs } from "./dataFormMember";
import { dataContractInpts } from "./dataFormMember";
import { dataMembershipInputs } from "./dataFormMember";
import { rwd } from "../../../utils/rwd";
import { dataDepartmentInputs } from "./dataFormMember";

const dataInputs = [
  <InputsTexts headingText="Twoje dane:" inputsData={dataParsonalInputs} />,
  <InputsTexts headingText="Twój adres:" inputsData={dataAdressInputs} />,

  <InputsRadio
    headingText="Pracodawca:"
    inputsData={dataEmployerInputs}
    inputValue="employer"
  />,

  <InputsRadio
    headingText="Dział:"
    inputsData={dataDepartmentInputs}
    inputValue="department"
  />,

  <InputsRadio
    headingText="Umowa:"
    inputsData={dataContractInpts}
    inputValue="contract"
  />,

  <InputsRadio
    headingText="Przynależność do innych związków zawodowych:"
    inputsData={dataMembershipInputs}
    inputValue="membership"
    membership={true}
  />,
];

const StepFormMember = () => {
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
              pt: rwd(1, 2.4),
              pb: rwd(0, 2.3),
            }}
          >
            {input}
          </Box>
        );
      })}
    </>
  );
};

export default StepFormMember;
