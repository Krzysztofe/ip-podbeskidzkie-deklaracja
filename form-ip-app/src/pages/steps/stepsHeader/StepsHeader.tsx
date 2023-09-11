import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";
import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../../context/ContextProv";
import useWindowWidth from "../../../hooks/useWindowWidth";

const StepsHeader = () => {
  const { steps, currentStepIdx, step, formik, formikClause } =
    useContext(StepsContext);

  const { windowWidth } = useWindowWidth();

  const dataSteps = ["Formulaż", "Klauzula", "Wyślij", "Potwierdzenie"];

  return (
    <Box
      sx={{
        width: "fit-content",
        mx: {xs:"auto",md:0},
        display: "flex",
        // pt:"1%"
        alignItems: "center",
        // justifyContentc:"center",
        // gap: 1,
        // position: "relative",
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
                // width: { xs: "48%", md: "auto" },
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
