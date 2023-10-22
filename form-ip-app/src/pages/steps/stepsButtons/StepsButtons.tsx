import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepClauseForm from "../stepClause/stepClauseForm/StepClauseForm";
import Captcha from "../stepSummary/Captcha";
import ButtonClauseSumit from "./ButtonClauseSumit";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonPOSTvalues from "./ButtonPOSTvalues";
import ButtonReturn from "./ButtonReturn";

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
        px: { xs: "20px !importand", md: "16px !important" },
        bgcolor: "white",
        zIndex: 2,
      }}
    >
      {currentStepIdx === 1 && <StepClauseForm />}
      {currentStepIdx === 2 && <Captcha />}

      <Box
        sx={{
          height: {
            xs: "120px",
            sm: "90px",
            md: "inherit"
          },
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
        }}
      >
        <ButtonReturn />
        <ButtonFormSubmit />
        <ButtonClauseSumit />
        <ButtonPOSTvalues />
      </Box>
    </Container>
  );
};

export default StepsButtons;
