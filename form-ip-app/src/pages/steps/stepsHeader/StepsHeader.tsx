import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import React from "react";
import StepFormAlert from "./StepFormAlert";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";
import { rwd } from "../../../utils/rwd";

const StepsHeader = () => {
  const dataSteps = ["Formularz", "Klauzula", "Wysyłka", "Potwierdzenie"];

  return (
    <>
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
    </>
  );
};

export default StepsHeader;
