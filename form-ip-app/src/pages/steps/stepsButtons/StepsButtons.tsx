import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { URL } from "../../../data/dataURL";
import SendIcon from "@mui/icons-material/Send";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";


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
    isCaptcha,
    setIsCaptcha,
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

  useEffect(() => {
    if (props.currentStepIdx !== 2) {
      setIsCaptcha(false);
    }
  }, [props.currentStepIdx]);

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

const buttonStyles = styled(Button)({
  width: "35%",
  p: "0.3em",
  marginLeft: "auto",
  "&:hover": { backgroundColor: "red" },
}); 


  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {props.currentStepIdx > 0 && (
        <Button
          variant="contained"
          startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}
          onClick={() => props.back()}
          sx={{ width: "35%", p: "0.3em" }}
        >
          Wstecz
        </Button>
      )}

      {props.currentStepIdx === 2 && (
        <Button
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          onClick={() => {
            // props.currentStepIdx < 2 && props.next();
            // isCaptcha && handlePOST();
            handlePOST();
          }}
          sx={{
            width: "35%",
            // p: "0.3em",
            marginLeft: "auto",
          }}
        >
          {/* {isCaptcha ? "Wyślij" : "Zaznacz CAPTCHA"} */}
          "Wyślij"
        </Button>
      )}

      {props.currentStepIdx === 0 && (
        <Button
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          type="submit"
          onClick={() => {
            isSubmited && isError.length === 0 && props.next();
          }}
          sx={{
            width: "35%",
            marginLeft: "auto",
            "&:hover": { backgroundColor: "red" },
          }}
        >
          Zatwierdź
        </Button>
      )}

      {props.currentStepIdx === 1 && (
        <Button
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          onClick={() => {
            isConfirmed && isErrorInClause.length === 0 && props.next();
          }}
          sx={{
            width: "35%",
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
