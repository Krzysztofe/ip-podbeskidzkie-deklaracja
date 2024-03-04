import create from "zustand";
import StepForm from "../pages/steps/stepForm/StepForm";
import StepClause from "../pages/steps/stepClause/StepClause";
import StepSummary from "../pages/steps/stepSummary/StepSummary";
import StepConfirmation from "../pages/steps/stepConfirmation/StepConfirmation";

type MultistepFormState = {
  currentStepIdx: number;
  steps: JSX.Element[];
  setCurrentStepIdx: (stepIdx: number) => void;
  next: () => void;
  back: () => void;
};

const useMultistepFormStore = create<MultistepFormState>(set => ({
  currentStepIdx: 0,
  steps: [<StepForm />, <StepClause />, <StepSummary />, <StepConfirmation />],
  setCurrentStepIdx: (stepIdx: number) =>
    set(state => ({ currentStepIdx: stepIdx })),
  next: () => set(state => ({ currentStepIdx: state.currentStepIdx + 1 })),
  back: () => set(state => ({ currentStepIdx: state.currentStepIdx - 1 })),
}));

export default useMultistepFormStore;
