import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useContext } from "react";
import { StepsContext } from "../../context/ContextProv";

interface Props {
  next: () => void;
  back: () => void;
  currentStepIdx: number;
  steps: JSX.Element[];
}

const StepsButtons = (props: Props) => {
  const { formik, isSubmited } = useContext(StepsContext);

  const isError = Object.values(formik.errors);

  useEffect(() => {
    if (isSubmited && isError.length === 0) props.next();
  }, [isSubmited]);

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => props.back()}
        sx={{ width: "35%", p: "0.3em" }}
      >
        Wstecz
      </Button>
      {props.currentStepIdx !== 2 && (
        <Button
          variant="contained"
          onClick={() => {
            props.next();
          }}
          sx={{ width: "35%", p: "0.3em" }}
          type="button"
        >
          {props.currentStepIdx < props.steps.length - 1 ? "Dalej" : "Wyślij"}
        </Button>
      )}

      {props.currentStepIdx === 2 && (
        <Button
          variant="contained"
          onClick={() => {
            isSubmited && isError.length === 0 && props.next();
          }}
          sx={{ width: "35%", p: "0.3em" }}
          type="submit"
        >
          {isError.length === 0 ? "Zatwierdź" : "Podaj dane"}
        </Button>
      )}
    </Box>
  );
};

export default StepsButtons;
