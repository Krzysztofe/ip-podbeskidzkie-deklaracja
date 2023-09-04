import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";
import StepClauseForm from "../stepClause/stepClauseForm/StepClauseForm";

const IndexSteps = () => {
  const { steps, currentStepIdx, step, formik, formikClause } =
    useContext(StepsContext);

  const scrollBoxRef = useRef(null);

  useEffect(() => {
    if (scrollBoxRef.current) {
      (scrollBoxRef.current as HTMLDivElement).scrollTop = 0;
    }
  }, [currentStepIdx]);

  const formSubmit =
    currentStepIdx === 0 ? formik.handleSubmit : formikClause.handleSubmit;

  return (
    <>
      <header>
        <Container
          sx={{
            height: { xs: "15vh", md: "10vh" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <StepsHeader />
        </Container>
      </header>
      <main>
        <Container
          sx={{
            height: { xs: "85vh", md: "90vh" },
            padding: "0px !important",
          }}
        >
          <form
            onSubmit={formSubmit}
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              ref={scrollBoxRef}
              id="scroll"
              sx={{ paddingInline: "16px", overflowY: "scroll" }}
            >
              {step}
            </Box>
            {currentStepIdx === 1 && <StepClauseForm />}
            {currentStepIdx < steps.length - 1 && (
              <>
                <Box>
                  <StepsButtons />
                </Box>
              </>
            )}
          </form>
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;
