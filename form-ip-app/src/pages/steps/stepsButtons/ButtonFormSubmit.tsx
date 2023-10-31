import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { rwd } from "../../../utils/rwd";

const ButtonFormSubmit = () => {
  const { currentStepIdx, isSubmited, next, formik } = useContext(StepsContext);

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
            width: rwd("65%", "12rem"),
            "&:hover": { bgcolor: "#2455BA" },
            marginLeft: rwd(0, "auto"),
          }}
        >
          Zatwierdź
        </Button>
      )}
    </>
  );
};

export default ButtonFormSubmit;
