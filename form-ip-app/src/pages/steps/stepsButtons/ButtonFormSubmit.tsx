import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const ButtonFormSubmit = () => {
  const {
    currentStepIdx,
    isSubmited,
    next,
    formik,
  } = useContext(StepsContext);

  const isError = Object.values(formik.errors);

  useEffect(() => {
    if (isSubmited && isError.length === 0) next();
  }, [isSubmited]);

  return (
    <>
      {currentStepIdx === 0 && (
        <Button
          variant="contained"
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          type="submit"
          onClick={() => {
            isSubmited && isError.length === 0 && next();
          }}
          sx={{
            width: { xs: "65%", sm: "15rem" },
            "&:hover": { backgroundColor: "#2455BA" },
            marginLeft: { xs: 0, sm: "auto" },
          }}
        >
          Zatwierdź
        </Button>
      )}
    </>
  );
};

export default ButtonFormSubmit;
