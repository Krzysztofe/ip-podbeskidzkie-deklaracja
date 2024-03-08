
import Container from "@mui/material/Container";
import { rwd } from "../../utils/rwd";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import FormContextWrapper from "./FormContextWrapper";
import StepsInForm from "./StepsInForm";
import StepsInFormWrapper from "./StepsInFormWrapper";
import StepClauseForm from "./stepClause/stepClauseForm/StepClauseForm";
import StepConfirmation from "./stepConfirmation/StepConfirmation";
import StepsButtons from "./stepsButtons/StepsButtons";

const StepsMainContainer = () => {
  const steps = useMultistepFormStore(state => state.steps);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const isLastStep = currentStepIdx === steps.length - 1;

  return (
    <Container
      sx={{
        height: rwd("calc(100vh - 56px)", "calc(100vh - 92px)"),
        mt: rwd("56px", "92px"),
        padding: "0px !important",
      }}
    >
      <FormContextWrapper>
        <StepsInFormWrapper>
          <StepsInForm />
        </StepsInFormWrapper>
        {currentStepIdx === 1 && <StepClauseForm />}
        {!isLastStep && <StepsButtons />}
      </FormContextWrapper>

      {isLastStep && <StepConfirmation />}
    </Container>
  );
};

export default StepsMainContainer;
