import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import React from "react";
import StepFormAlert from "./StepFormAlert";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";

const StepsHeader = () => {
  const dataSteps = ["Formularz", "Klauzula", "Wyślij", "Potwierdzenie"];

  return (
    <>
      <StepFormAlert />
      <Box
        sx={{
          width: "fit-content",
          mx: { xs: "auto", md: 0 },
          display: "flex",
          alignItems: "center",
          mb: { xs: 1.3, md: 0 },
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
                      fontSize: { xs: "0.8rem", sm: "small" },
                    }}
                  />
                )}
              </Box>
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};

export default StepsHeader;
