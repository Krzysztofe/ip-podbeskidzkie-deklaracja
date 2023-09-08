import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";
import { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../../context/ContextProv";
import useWindowWidth from "../../../hooks/useWindowWidth";

const StepsHeader = () => {
  const { steps, currentStepIdx, step, formik, formikClause } =
    useContext(StepsContext);

  const { windowWidth } = useWindowWidth();

  const dataSteps = ["Formulaż", "Klauzula", "Podsumowanie", "Potwierdzenie"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
        position: "relative",
      }}
    >
      {dataSteps.map((text, idx, arr) => {
        return (
          <Box key={text}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                // width: { xs: "48%", md: "auto" },
              }}
            >
              <StepsHeaderNumber idx={idx} />
              {windowWidth > 900 && <StepsHeaderText text={text} />}
              {idx < arr.length - 1 && (
                <ArrowForwardIosIcon
                  color="secondary"
                  sx={{
                    marginRight: { sm: "1rem" },
                    marginLeft: { xs: "0", sm: "auto" },
                    fontSize: { xs: "0.8rem", sm: "small" },
                  }}
                />
              )}
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: "-70%",
                left: "-3%",
              }}
            >
              {windowWidth < 900 && idx === currentStepIdx && (
                <StepsHeaderText text={text} />
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default StepsHeader;
