import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepConfirmation from "../stepConfirmation/StepConfirmation";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";
import HttpRequestState from "./HttpRequestState";

const IndexSteps = () => {
  const { steps, currentStepIdx, formik, formikClause, isLastStep } =
    useContext(StepsContext);

  const scrollBoxRef = useRef(null);

  useEffect(() => {
    if (scrollBoxRef.current) {
      (scrollBoxRef.current as HTMLDivElement).scrollTop = 0;
    }
  }, [currentStepIdx]);

  const formSubmit =
    currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  const height =
    currentStepIdx === 0
      ? {
          xs: "calc(100% - 120px)",
          sm: "calc(100% - 90px)",
        }
      : isLastStep
      ? "auto"
      : {
          xs: "calc(100% - 120px - 74px)",
          sm: "calc(100% - 90px - 72px)",
        };

  return (
    <>
      <header>
        <Container
          sx={{
            height: { xs: "56px", sm: "92px" },
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translate(-50%)",
            display: "flex",
            alignItems: "center",
            pl: "16px !important",
            bgcolor: "white",
            zIndex: 2,
          }}
        >
          <StepsHeader />
        </Container>
      </header>
      <main>
        <HttpRequestState />
        <Container
          sx={{
            height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 92px)" },
            mt: { xs: "56px", sm: "92px" },
            padding: "0px !important",
          }}
        >
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
                  height: height,
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
                      ref={scrollBoxRef}
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
      </main>
    </>
  );
};

export default IndexSteps;
