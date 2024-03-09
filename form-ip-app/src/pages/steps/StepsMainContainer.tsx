import FormContextWrapper from "./FormContextWrapper";
import StepsInForm from "./StepsInForm";
import StepsInFormWrapper from "./StepsInFormWrapper";
import StepFormClause from "./stepClause/StepFormClause";
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
        <StepFormClause />
        <Captcha />
        <StepsButtons />
      </FormContextWrapper>
      <StepConfirmation />
    </>
  );
};

export default StepsMainContainer;
