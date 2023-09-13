import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../../../context/ContextProv";
import StepsButtons from "../stepsButtons/StepsButtons";
import StepsHeader from "../stepsHeader/StepsHeader";

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

  const height =
    currentStepIdx === 0
      ? {
          xs: "calc(100% - 120px)",
          sm: "calc(100% - 90px)",
        }
      : currentStepIdx === 3
      ? "auto"
      : {
          xs: "calc(100% - 120px - 74px)",
          sm: "calc(100% - 90px - 72px)",
        };

  return (
    <>
      <header>
        <Container
          sx={{
            height: { xs: "56px", sm: "92px" },
            position: "fixed",
            top: 0,
            left: "50%",
            right: "50%",
            transform: "translate(-50%)",
            display: "flex",
            alignItems: "center",
            pl: "16px !important",
            bgcolor: "white",
            zIndex: 2,
          }}
        >
          <StepsHeader />
        </Container>
      </header>
      <main>
        <Container
          sx={{
            height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 92px)" },
            mt: { xs: "56px", sm: "92px" },
            padding: "0px !important",
          }}
        >
          <form
            onSubmit={formSubmit}
            style={{
              height: "100%",
            }}
          >
            <Box
              ref={scrollBoxRef}
              sx={{
                px: 1.6,
                overflowY: "auto",
                height: height,
                // "&::-webkit-scrollbar-thumb": {
                //   backgroundColor: "red",
                // },
                "&::-webkit-scrollbar": {
                  // width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "red",
                },
              }}
            >
              {step}
            </Box>

            {currentStepIdx < steps.length - 1 && <StepsButtons />}
          </form>
        </Container>
      </main>
    </>
  );
};

export default IndexSteps;
