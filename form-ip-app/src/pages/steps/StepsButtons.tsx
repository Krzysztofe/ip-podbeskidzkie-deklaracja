import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../context/ContextProv";
import { URL } from "../../data/dataURL";

interface Props {
  next: () => void;
  back: () => void;
  currentStepIdx: number;
  steps: JSX.Element[];
}

const StepsButtons = (props: Props) => {
  const {
    formik,
    formikClause,
    isSubmited,
    isConfirmed,
    sendRequest,
  } = useContext(StepsContext);
  const [responseStatus, setResponseStatus] = useState(false);

  const isError = Object.values(formik.errors);
  const isErrorInClause = Object.values(formikClause.errors);

  useEffect(() => {
    if (isSubmited && isError.length === 0) props.next();
  }, [isSubmited]);

  useEffect(() => {
    if (isConfirmed && isErrorInClause.length === 0) props.next();
  }, [isConfirmed]);

  useEffect(() => {
    if (responseStatus) props.next();
  }, [responseStatus]);

  const handlePOST = () => {
    if (props.currentStepIdx === 2) {
      sendRequest(
        {
          url: URL,
          body: { member: formik.values },
          method: "POST",
        },
        setResponseStatus
      );
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {props.currentStepIdx > 0 && (
        <Button
          variant="contained"
          onClick={() => props.back()}
          sx={{ width: "35%", p: "0.3em" }}
        >
          Wstecz
        </Button>
      )}

      {props.currentStepIdx === 2 && (
        <Button
          variant="contained"
          onClick={() => {
            props.currentStepIdx < 2 && props.next();
            handlePOST();
          }}
          sx={{
            width: "35%",
            p: "0.3em",
            marginLeft: "auto",
          }}
          type="button"
        >
          {props.currentStepIdx < props.steps.length - 2 ? "Dalej" : "Wyślij"}
        </Button>
      )}

      {props.currentStepIdx === 0 && (
        <Button
          variant="contained"
          onClick={() => {
            isSubmited && isError.length === 0 && props.next();
          }}
          sx={{
            width: "35%",
            p: "0.3em",
            marginLeft: "auto",
          }}
          type="submit"
        >
          Zatwierdź
        </Button>
      )}

      {props.currentStepIdx === 1 && (
        <Button
          variant="contained"
          onClick={() => {
            isConfirmed && isErrorInClause.length === 0 && props.next();
          }}
          sx={{
            width: "35%",
            p: "0.3em",
            marginLeft: "auto",
          }}
          type="submit"
        >
          Zatwierdź
        </Button>
      )}
    </Box>
  );
};

export default StepsButtons;
