import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { rwd } from "../../../utils/rwd";
import StepFormAlert from "./StepFormAlert";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";

const StepsHeader = () => {
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
            <React.Fragment key={text}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <StepsHeaderNumber idx={idx} />
                <StepsHeaderText text={text} />

                {idx < arr.length - 1 && (
                  <ArrowForwardIosIcon
                    color="secondary"
                    sx={{
                      mx: "21px",
                      fontSize: rwd("0.8rem", "small"),
                    }}
                  />
                )}
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
    </Container>
  );
};

export default StepsHeader;
