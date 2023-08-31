import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import Button from "@mui/material/Button";

const ButtonReturn = () => {
  const { currentStepIdx, back } = useContext(StepsContext);
  return (
    <>
      {currentStepIdx > 0 && (
        <Button
          variant="contained"
          startIcon={<KeyboardDoubleArrowLeftOutlinedIcon />}
          onClick={() => back()}
          sx={{
            width: { xs: "65%", sm: "15rem" },
            "&:hover": { backgroundColor: "#2455BA" },
          }}
        >
          Wstecz
        </Button>
      )}
    </>
  );
};

export default ButtonReturn;
