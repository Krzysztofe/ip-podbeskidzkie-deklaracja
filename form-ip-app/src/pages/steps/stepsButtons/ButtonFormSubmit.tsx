import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";

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
          type="submit"
          onClick={() => {
            isSubmited && isError.length === 0 && next();
          }}
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          sx={{
            width: { xs: "65%", sm: "12rem" },
            "&:hover": { bgcolor: "#2455BA" },
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
