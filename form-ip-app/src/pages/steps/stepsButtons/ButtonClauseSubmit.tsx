import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { rwd } from "../../../utils/rwd";
import useClauseStore from "../../../zustandStores/useClauseStore";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

const ButtonClauseSubmit = () => {
  const isConfirmed = useClauseStore(state => state.isConfirmed);
  const { errors } = useFormikContext<{ confirmation: boolean }>();
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const next = useMultistepFormStore(state => state.next);
  const isErrorInClause = Object.values(errors);

  useEffect(() => {
    if (isConfirmed && isErrorInClause.length === 0) next();
  }, [isConfirmed]);

  return (
    <>
      {currentStepIdx === 1 && (
        <Button
          variant="contained"
          type="submit"
          onClick={() => isConfirmed && isErrorInClause.length === 0 && next()}
          endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
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

export default ButtonClauseSubmit;
