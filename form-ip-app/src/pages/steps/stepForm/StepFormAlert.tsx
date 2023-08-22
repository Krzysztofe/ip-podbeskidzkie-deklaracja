import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const StepFormAlert = () => {
  const { formik } = useContext(StepsContext);
  const isError = Object.values(formik.errors);

  return (
    <>
 
      <Alert
        severity="error"
        sx={{ width: "100%", position: "fixed", zIndex: "100", marginTop: isError.length > 0 ? "0": "-100px",transitionDuratio: "500ms" }}
      >
        Wypełnij brakujące pola formulaża
      </Alert>
    </>
  );
};

export default StepFormAlert;
