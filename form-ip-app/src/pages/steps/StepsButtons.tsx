import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useEffect } from "react";

interface Props {
  next: () => void;
  back: () => void;
  currentStepIdx: number;
  steps: JSX.Element[];
  isSubmited: boolean;
  formik: any;
}

const StepsButtons = (props: Props) => {
  const isError = Object.values(props.formik.errors);

  useEffect(() => {
    if (props.isSubmited && isError.length === 0) props.next();
  }, [props.isSubmited]);

  return (
    <>
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
            props.isSubmited && isError.length === 0 && props.next();
          }}
          sx={{ width: "35%", p: "0.3em" }}
          type="submit"
        >
          Zatwierdź
        </Button>
      )}
    </>
  );
};

export default StepsButtons;
