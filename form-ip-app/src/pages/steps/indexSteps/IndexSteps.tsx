import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepClause from "../stepClause/StepClause";
import StepConfirmation from "../stepConfirmation/StepConfirmation";
import StepForm from "../stepForm/StepForm";
import StepSummary from "../stepSummary/StepSummary";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";
import useMultistepForm from "./useMultistepForm";

const IndexSteps = () => {
  const {steps, currentStepIdx, step, back, next, formik, formikClause } = useContext(StepsContext);

  // const { steps, currentStepIdx, step, back, next } = useMultistepForm([
  //   <StepForm />,
  //   <StepClause />,
  //   <StepSummary />,
  //   <StepConfirmation />,
  // ]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [currentStepIdx]);

  const formSubmit =
    currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  return (
    <>
      <header>
        <Container
          sx={{
            backgroundColor: "white",
            position: "fixed",
            zIndex: 2,
            // height: theme => theme.spacing(7),
            // pt: { sx: 3, sm: 10 },
            // mb: { sx: 8, sm: 10 },
            left: "50%",
            right: "50%",
            transform: "translate(-50%)",
          }}
        >
          <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
        </Container>

        <Container sx={{ height: theme => theme.spacing(7) }}></Container>
      </header>
      <main>
        <Container sx={{}}>
          <form onSubmit={formSubmit} style={{ position: "relative" }}>
            {step}

            {currentStepIdx < steps.length - 1 && (
              <>
                <Box
                  sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "white",
                    width: "100%",
                    height: { xs: "7rem", sm: "5rem" },
                    zIndex: 2,
                    // bgcolor: "blue",
                  }}
                >
                  <StepsButtons
                    next={next}
                    back={back}
                    currentStepIdx={currentStepIdx}
                    steps={steps}
                  />
                </Box>
                <Box sx={{ height: { xs: "7rem", sm: "5rem" } }}></Box>
              </>
            )}
          </form>
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;
