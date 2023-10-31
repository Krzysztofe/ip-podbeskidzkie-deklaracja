import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { rwd } from "../../../utils/rwd";

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
            width: rwd("65%", "12rem"),
            "&:hover": { bgcolor: "#2455BA" },
            mt: rwd(1, 0),
          }}
        >
          Wróć
        </Button>
      )}
    </>
  );
};

export default ButtonReturn;
