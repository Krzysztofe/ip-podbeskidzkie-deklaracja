import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import React from "react";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";

const StepsHeader = () => {
  const dataSteps = ["Formulaż", "Klauzula", "Wyślij", "Potwierdzenie"];

  return (
    <Box
      sx={{
        // position: "fixed",
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
              {/* <ArrowForwardIosIcon
                color="secondary"
                sx={{
                  mx: "21px",
                  fontSize: { xs: "0.8rem", sm: "small" },
                }}
              /> */}

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

            {/* <Box
              sx={{
                position: "absolute",
                bottom: "-70%",
                left: "-3%",
              }}
            >
              {windowWidth < 900 && (
                <StepsHeaderText text={text} />
              )}
            </Box> */}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default StepsHeader;
