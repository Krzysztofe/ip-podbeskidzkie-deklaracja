import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useContext } from "react";
import { StepsContext } from "../../context/ContextProv";
import { responsiveFontSizes } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useHttp from "./stepForm/hooks/useHttp";
import { URL } from "../../data/dataURL";

interface Props {
  next: () => void;
  back: () => void;
  currentStepIdx: number;
  steps: JSX.Element[];
}

const StepsButtons = (props: Props) => {
  const { formik,isLoading, isSubmited, sendRequest } =
    useContext(StepsContext);

  const isError = Object.values(formik.errors);

  useEffect(() => {
    if (isSubmited && isError.length === 0) props.next();
  }, [isSubmited]);


  const handlePOST = () => {
    if (props.currentStepIdx === 2) {
      sendRequest({
        url: URL,
        body: { member: formik.values },
        method: "POST",
      });
    }
  };

  // const send = () => {
  //   fetch("https://mail-sender-production.up.railway.app/receive", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ member: formik.values }),
  //   });
  // };

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

      {props.currentStepIdx !== 1 && (
        <Button
          variant="contained"
          onClick={() => {
            props.next();
            handlePOST();
            // send()
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

      {props.currentStepIdx === 1 && (
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
