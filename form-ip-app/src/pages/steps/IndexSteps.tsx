import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import StepDateInfo from "./StepDateInfo";
import StepGeneralnfo from "./StepGeneralnfo";
import StepsHeader from "./StepsHeader";
import StepForm from "./stepForm/StepForm";
import useStepFormFormik from "./stepForm/useStepFormFormik";
import useMultistepForm from "./useMultistepForm";
import StepSummary from "./StepSummary";
import StepsButtons from "./StepsButtons";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";

const IndexSteps = () => {
  const { formik, isSubmited } = useContext(StepsContext);

  const {
    steps,
    currentStepIdx,
    setCurrentStepIdx,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <StepDateInfo />,
    <StepGeneralnfo />,
    <StepForm />,
    <StepSummary />,
  ]);

  return (
    <Container>
      <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
      <>
        <form onSubmit={formik.handleSubmit}>
          {step}

          <StepsButtons
            next={next}
            back={back}
            currentStepIdx={currentStepIdx}
            steps={steps}
          />
        </form>
      </>
    </Container>
  );
};

export default IndexSteps;
