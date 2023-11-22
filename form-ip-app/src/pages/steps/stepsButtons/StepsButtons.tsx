import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepClauseForm from "../stepClause/stepClauseForm/StepClauseForm";
import Captcha from "../stepSummary/Captcha";
import ButtonClauseSubmit from "./ButtonClauseSubmit";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonPOSTvalues from "./ButtonPOSTvalues";
import ButtonReturn from "./ButtonReturn";
import { rwd } from "../../../utils/rwd";

const StepsButtons = () => {
  const { currentStepIdx } = useContext(StepsContext);

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
