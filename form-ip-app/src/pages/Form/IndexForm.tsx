import React from "react";
import useMultistepForm from "./useMultistepForm";
import StepDateInfo from "./StepDateInfo";
import StepGeneralnfo from "./StepGeneralnfo";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import StepsHeader from "./StepsHeader";
import StepForm from "./StepForm";

const IndexForm = () => {
  const {
    steps,
    currentStepIdx,
    setCurrentStepIdx,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([<StepDateInfo />, <StepGeneralnfo />, <StepForm />]);

  return (
    <Container>
      <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
      {step}
      <Button
        variant="contained"
        onClick={() => back()}
        sx={{ width: "35%", p: "0.3em" }}
      >
        Wstecz
      </Button>
      <Button
        variant="contained"
        onClick={() => next()}
        sx={{ width: "35%", p: "0.3em" }}
      >
        Dalej
      </Button>
    </Container>
  );
};

export default IndexForm;
