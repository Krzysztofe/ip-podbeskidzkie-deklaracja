import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { rwd } from "../../../utils/rwd";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

const ButtonFormSubmit = () => {
  const { isSubmited, formik } = useContext(StepsContext);

  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
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
