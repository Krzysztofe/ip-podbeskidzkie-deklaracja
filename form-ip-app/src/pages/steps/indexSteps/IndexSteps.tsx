import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepConfirmation from "../stepConfirmation/StepConfirmation";
import StepSummary from "../stepSummary/StepSummary";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";
import StepForm from "../stepForm/StepForm";
import StepClause from "../stepClause/StepClause";
import useMultistepForm from "./useMultistepForm";

const IndexSteps = () => {
  const { formik, formikClause } = useContext(StepsContext);

  const { steps, currentStepIdx, step, back, next } = useMultistepForm([
    <StepForm />,
    <StepClause />,
    <StepSummary />,
    <StepConfirmation />,
  ]);

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
            height: theme => theme.spacing(7),
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
        <Container sx={{ }}>
          <form onSubmit={formSubmit} style={{ position: "relative" }}>
            {step}

            {currentStepIdx < steps.length - 1 && (
              <>
                <StepsButtons
                  next={next}
                  back={back}
                  currentStepIdx={currentStepIdx}
                  steps={steps}
                />
                <Box sx={{ height: { xs: "6rem", sm: "3rem" } }}></Box>
              </>
            )}
          </form>
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;
