import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../context/ContextProv";
import { rwd } from "../../utils/rwd";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";
import StepConfirmation from "./stepConfirmation/StepConfirmation";
import StepsButtons from "./stepsButtons/StepsButtons";
import { Form, Formik } from "formik";
import useFormikForm from "./stepForm/stepFormFormik/useFormikForm";
// import useClauseStore from "../../zustandStores/useClauseStore";

const StepsContainer = () => {
  // const { formik, formikClause } = useContext(StepsContext);

  const steps = useMultistepFormStore(state => state.steps);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const { initialValues, validation, onSubmit } = useFormikForm();

  const isLastStep = currentStepIdx === steps.length - 1;

  const scrollBoxRefs = [
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
    useRef<HTMLElement | null>(null),
  ];

  useEffect(() => {
    scrollBoxRefs.forEach(scrollBoxRef => {
      if (scrollBoxRef.current) {
        scrollBoxRef.current.scrollTop = 0;
      }
    });
  }, [currentStepIdx]);

  // const formSubmit =
  //   currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  const height =
    currentStepIdx === 0
      ? rwd("calc(100% - 120px)", "calc(100% - 90px)")
      : rwd("calc(100% - 120px - 74px)", "calc(100% - 90px - 72px)");

  return (
    <Container
      sx={{
        height: rwd("calc(100vh - 56px)", "calc(100vh - 92px)"),
        mt: rwd("56px", "92px"),
        padding: "0px !important",
      }}
    >
      {currentStepIdx < 3 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <Form
            style={{
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                height,
                display: "grid",
                gridTemplateColumns: "repeat(3, 100%)",
                transform: `translate(-${currentStepIdx}00%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {steps.slice(0, -1).map((steps, idx) => {
                return (
                  <Box
                    key={idx}
                    ref={scrollBoxRefs[idx]}
                    sx={{
                      overflowY: "auto",
                      px: 1.6,
                    }}
                  >
                    {steps}
                  </Box>
                );
              })}
            </Box>
            {!isLastStep && <StepsButtons />}
          </Form>
        </Formik>
      )}

      {isLastStep && <StepConfirmation />}
    </Container>
  );
};

export default StepsContainer;
