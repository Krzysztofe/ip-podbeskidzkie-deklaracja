import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { rwd } from "../../../utils/rwd";
import { useFormStore } from "../../../store";
import { useContext, useEffect, useRef } from "react";
import StepConfirmation from "../stepConfirmation/StepConfirmation";
import StepsButtons from "../stepsButtons/StepsButtons";
import { StepsContext } from "../../../context/ContextProv";

const StepsContainer = () => {
  const { steps, currentStepIdx, formik, formikClause, isLastStep } =
    useContext(StepsContext);
  const { count, increment, decrement } = useFormStore((state: any) => state);

  console.log("", count);

  const scrollBoxRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  useEffect(() => {
    scrollBoxRefs.forEach(scrollBoxRef => {
      if (scrollBoxRef.current) {
        scrollBoxRef.current.scrollTop = 0;
      }
    });
  }, [currentStepIdx]);

  const formSubmit =
    currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  const height =
    currentStepIdx === 0
      ? rwd("calc(100% - 120px)", "calc(100% - 90px)")
      : rwd("calc(100% - 120px - 74px)", "calc(100% - 90px - 72px)");

  return (
    <Container
      sx={{
        height: rwd("calc(100vh - 56px)", "calc(100vh - 92px)"),
        mt: rwd("56px", "92px"),
        padding: "0px !important",
      }}
    >
      <button onClick={increment}>inc</button>
      <button onClick={decrement}>dec</button>
      {currentStepIdx < 3 && (
        <form
          onSubmit={formSubmit}
          style={{
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height,
              display: "grid",
              gridTemplateColumns: "repeat(3, 100%)",
              transform: `translate(-${currentStepIdx}00%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {steps.slice(0, -1).map((step, idx) => {
              return (
                <Box
                  key={idx}
                  ref={scrollBoxRefs[idx]}
                  sx={{
                    overflowY: "auto",
                    px: 1.6,
                  }}
                >
                  {step}
                </Box>
              );
            })}
          </Box>
          {!isLastStep && <StepsButtons />}
        </form>
      )}

      {isLastStep && <StepConfirmation />}
    </Container>
  );
};

export default StepsContainer;
