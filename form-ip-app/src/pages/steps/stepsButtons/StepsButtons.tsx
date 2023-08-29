import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { URL } from "../../../data/dataURL";
import SendIcon from "@mui/icons-material/Send";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import zIndex from "@mui/material/styles/zIndex";
// import { Container } from "@mui/material";
import Captcha from "../stepSummary/Captcha";

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
      console.log("", URL);
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
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        width: "100%",
        height: { xs: "6rem", sm: "3rem" },
        zIndex: 2,
        // bgcolor: "blue",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          gap: 1,
        }}
      >
        {props.currentStepIdx > 0 && (
          <Button
            variant="contained"
            startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}
            onClick={() => props.back()}
            sx={{
              width: { xs: "65%", sm: "15rem" },
            }}
          >
            Wstecz
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
              width: { xs: "65%", sm: "15rem" },
              "&:hover": { backgroundColor: "red" },
              marginLeft: { xs: 0, sm: "auto" },
            }}
          >
            Zatwierdź
          </Button>
        )}

        {props.currentStepIdx === 1 && (
          <Button
            variant="contained"
            type="submit"
            endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
            onClick={() => {
              isConfirmed && isErrorInClause.length === 0 && props.next();
            }}
            sx={{
              width: { xs: "65%", sm: "15rem" },
            }}
          >
            Zatwierdź
          </Button>
        )}

        {props.currentStepIdx === 2 && (
          <Button
            variant="contained"
            endIcon={isCaptcha && <KeyboardDoubleArrowRightOutlinedIcon />}
            onClick={() => {
              props.currentStepIdx < 2 && props.next();
              isCaptcha && handlePOST();
              // handlePOST();
            }}
            sx={{
              width: { xs: "65%", sm: "15rem", textTransform: "none" },
            }}
          >
            {isCaptcha ? "Wyślij" : "ZAZNACZ reCAPTCHA"}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default StepsButtons;
