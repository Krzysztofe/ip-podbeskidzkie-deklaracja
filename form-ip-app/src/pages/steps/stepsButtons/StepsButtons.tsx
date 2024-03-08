import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";
import ButtonClauseSubmit from "./buttonClauseSubmit/ButtonClauseSubmit";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonPOSTvalues from "./buttonPOST/ButtonPOSTvalues";
import ButtonReturn from "./ButtonReturn";

const StepsButtons = () => {
  const isLastStep = useMultistepFormStore(state => state.isLastStep);

  if (isLastStep) return null;

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
