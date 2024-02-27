import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import StepFormAlert from "./StepFormAlert";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";
import StepHeaderArrow from "./StepHeaderArrow";
import { memo } from "react";

const StepsHeader = memo(() => {
  const dataSteps = ["Formularz", "Klauzula", "Wysyłka", "Potwierdzenie"];

  return (
    <Container
      sx={{
        height: rwd("56px", "92px"),
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translate(-50%)",
        display: "flex",
        alignItems: "center",
        pl: "16px !important",
        bgcolor: "white",
        zIndex: 2,
        scrollbarGutter: "stable",
      }}
    >
      <StepFormAlert />
      <Box
        sx={{
          width: "fit-content",
          mx: rwd("auto", "auto", "0"),
          display: "flex",
          alignItems: "center",
          mb: rwd(1.3, 1.3, 0),
        }}
      >
        {dataSteps.map((text, idx, arr) => {
          return (
            <Box
              key={text}
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <StepsHeaderNumber idx={idx} />
              <StepsHeaderText text={text} />
              <StepHeaderArrow idx={idx} array={arr} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
});

export default StepsHeader;
