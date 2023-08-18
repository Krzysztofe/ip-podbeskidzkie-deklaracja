import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const StepFormAlert = () => {
  const { formik } = useContext(StepsContext);
  const isError = Object.values(formik.errors);

  return (
    <>
      {isError.length !== 0 && (
        <Alert severity="error" sx={{ width: "100%", position: "fixed", zIndex: "100" }}>
          Wypełnij brakujące pola
        </Alert>
      )}
    </>
  );
};

export default StepFormAlert;
