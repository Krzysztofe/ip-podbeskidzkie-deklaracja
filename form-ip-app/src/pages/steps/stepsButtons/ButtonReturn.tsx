import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

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
            height: "fit-content",
            width: { xs: "65%", sm: "12rem" },
            "&:hover": { bgcolor: "#2455BA" },
            mt: { xs: 1, sm: 0 },
          }}
        >
          Wstecz
        </Button>
      )}
    </>
  );
};

export default ButtonReturn;
