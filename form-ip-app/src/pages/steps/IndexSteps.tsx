import Container from "@mui/material/Container";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";
import StepDateInfo from "./StepDateInfo";
import StepSummary from "./StepSummary";
import StepsButtons from "./StepsButtons";
import StepsHeader from "./StepsHeader";
import StepForm from "./stepForm/StepForm";
import StepGeneralnfo from "./stepGeneralInfo/StepGeneralnfo";
import useMultistepForm from "./useMultistepForm";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import HttpRequestState from "./HttpRequestState";

const IndexSteps = () => {
  const { formik, isLoading, error } = useContext(StepsContext);

  const { steps, currentStepIdx, step, back, next } = useMultistepForm([
    <StepGeneralnfo />,
    <StepForm />,
    <StepSummary />,
    // <StepDateInfo />,
  ]);

  return (
    <main>
      <Container>
        <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
        <form onSubmit={formik.handleSubmit} style={{ position: "relative" }}>
          {step}
          <StepsButtons
            next={next}
            back={back}
            currentStepIdx={currentStepIdx}
            steps={steps}
          />
        </form>
      </Container>
    </main>
  );
};

export default IndexSteps;
