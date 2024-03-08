import FormContextWrapper from "./FormContextWrapper";
import StepsInForm from "./StepsInForm";
import StepsInFormWrapper from "./StepsInFormWrapper";
import StepClauseForm from "./stepClause/stepClauseForm/StepClauseForm";
import StepConfirmation from "./stepConfirmation/StepConfirmation";
import Captcha from "./stepSummary/Captcha";
import StepsButtons from "./stepsButtons/StepsButtons";

const StepsMainContainer = () => {
  return (
    <>
      <FormContextWrapper>
        <StepsInFormWrapper>
          <StepsInForm />
        </StepsInFormWrapper>
        <StepClauseForm />
        <Captcha />
        <StepsButtons />
      </FormContextWrapper>
      <StepConfirmation />
    </>
  );
};

export default StepsMainContainer;
