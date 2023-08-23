import Container from "@mui/material/Container";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepConfirmation from "../stepConfirmation/StepConfirmation";
import StepSummary from "../stepSummary/StepSummary";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";
import StepForm from "../stepForm/StepForm";
import StepGeneralnfo from "../stepClause/StepClause";
import useMultistepForm from "./useMultistepForm";

const IndexSteps = () => {
  const { formik, formikClause } = useContext(StepsContext);

  const { steps, currentStepIdx, step, back, next } = useMultistepForm([
    <StepForm />,
    <StepGeneralnfo />,
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
            height: 55,
            left: "50%",
            right: "50%",
            transform: "translate(-50%)",
          }}
        >
          <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
        </Container>

        <Container sx={{ height: 55 }}></Container>
      </header>
      <main>
        <Container>
          <form onSubmit={formSubmit} style={{ position: "relative" }}>
            {step}
            {currentStepIdx < steps.length - 1 && (
              <StepsButtons
                next={next}
                back={back}
                currentStepIdx={currentStepIdx}
                steps={steps}
              />
            )}
          </form>
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;
