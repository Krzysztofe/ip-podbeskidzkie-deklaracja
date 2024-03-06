import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";
import StepClauseForm from "../stepClause/stepClauseForm/StepClauseForm";
import Captcha from "../stepSummary/Captcha";
import ButtonClauseSubmit from "./ButtonClauseSubmit";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonPOSTvalues from "./ButtonPOSTvalues";
import ButtonReturn from "./ButtonReturn";

const StepsButtons = () => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);


  return (
    <Container
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: rwd("20px !importand", "20px !importand", "16px !important"),
        bgcolor: "white",
        zIndex: 2,
      }}
    >
      {currentStepIdx === 1 && <StepClauseForm />}
      {currentStepIdx === 2 && <Captcha />}

      <Box
        sx={{
          height: rwd("120px", "90px"),
          display: "flex",
          flexDirection: rwd("column-reverse", "row"),
          justifyContent: rwd("center", "space-between"),
          alignItems: "center",
        }}
      >
        <ButtonReturn />
        <ButtonFormSubmit />
        <ButtonClauseSubmit />
        <ButtonPOSTvalues />
      </Box>
    </Container>
  );
};

export default StepsButtons;
