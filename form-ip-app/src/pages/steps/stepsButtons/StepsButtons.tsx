import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { URL } from "../../../data/dataURL";
import ButtonReturn from "./ButtonReturn";
import ButtonFormSubmit from "./ButtonFormSubmit";
import ButtonClauseSumit from "./ButtonClauseSumit";

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

  // useEffect(() => {
  //   if (isSubmited && isError.length === 0) props.next();
  // }, [isSubmited]);

  // useEffect(() => {
  //   if (isConfirmed && isErrorInClause.length === 0) props.next();
  // }, [isConfirmed]);

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
    "&:hover": { backgroundColor: "#2455BA" },
  });

  return (
    <>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <ButtonReturn />
        <ButtonFormSubmit />
        <ButtonClauseSumit />

       
        {props.currentStepIdx === 2 && (
          <Button
            variant="contained"
            endIcon={isCaptcha && <KeyboardDoubleArrowRightOutlinedIcon />}
            onClick={() => {
              props.currentStepIdx < 2 && props.next();
              // isCaptcha && handlePOST();
              handlePOST();
            }}
            sx={{
              width: { xs: "65%", sm: "15rem" },
              "&:hover": { backgroundColor: "#2455BA" },
            }}
          >
            {isCaptcha ? "Wyślij" : "ZAZNACZ CAPTCHA"}
          </Button>
        )}
      </Container>
    </>
  );
};

export default StepsButtons;
