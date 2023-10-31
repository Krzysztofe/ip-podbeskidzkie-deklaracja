import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { rwd } from "../../../utils/rwd";

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
            width: rwd("65%", "12rem"),
            "&:hover": { bgcolor: "#2455BA" },
          }}
        >
          Zatwierdź
        </Button>
      )}
    </>
  );
};

export default ButtonClauseSumit;
