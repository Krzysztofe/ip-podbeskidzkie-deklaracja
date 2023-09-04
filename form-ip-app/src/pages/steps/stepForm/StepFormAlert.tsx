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
        sx={{
          maxWidth: "1400px",
          width: "100%",
          position: "fixed",
          left: "50%",
          right: "50%",
          transform: "translate(-50%)",
          zIndex: "100",
          marginTop: isError.length > 0 ? "0" : "-510px",
          // transitionDuratio: "500ms",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Wypełnij pola formulaża
      </Alert>
    </>
  );
};

export default StepFormAlert;
