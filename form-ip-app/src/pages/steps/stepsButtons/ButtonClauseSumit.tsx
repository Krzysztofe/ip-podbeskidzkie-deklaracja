import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";

const ButtonClauseSumit = () => {
  const { currentStepIdx, next, formikClause, isConfirmed } =
    useContext(StepsContext);

  const isErrorInClause = Object.values(formikClause.errors);

  useEffect(() => {
    if (isConfirmed && isErrorInClause.length === 0) next();
  }, [isConfirmed]);

  return (
    <>
      {currentStepIdx === 1 && (
        <Button
          variant="contained"
          type="submit"
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
          onClick={() => {
            isConfirmed && isErrorInClause.length === 0 && next();
          }}
          sx={{
            width: { xs: "65%", sm: "12rem" },
            "&:hover": { backgroundColor: "#2455BA" },
          }}
        >
          Zatwierdź
        </Button>
      )}
    </>
  );
};

export default ButtonClauseSumit;
