import Container from "@mui/material/Container";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";
import StepDateInfo from "./StepDateInfo";
import StepSummary from "./stepSummary/StepSummary";
import StepsButtons from "./StepsButtons";
import StepsHeader from "./StepsHeader";
import StepForm from "./stepForm/StepForm";
import StepGeneralnfo from "./stepClause/StepClause";
import useMultistepForm from "./useMultistepForm";

const IndexSteps = () => {
  const { formik, formikClause } = useContext(StepsContext);

  const { steps, currentStepIdx, step, back, next } = useMultistepForm([
    <StepForm />,
    <StepGeneralnfo />,
    <StepSummary />,
    <StepDateInfo />,
  ]);

  const formSubmit =
    currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  return (
    <main>
      <Container>
        <StepsHeader currentStepIdx={currentStepIdx} steps={steps} />
        <form onSubmit={formSubmit} style={{ position: "relative" }}>
          {step}
          {currentStepIdx < 3 && (
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
  );
};

export default IndexSteps;
