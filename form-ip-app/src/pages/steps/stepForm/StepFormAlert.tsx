import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const StepFormAlert = () => {
  const { formik } = useContext(StepsContext);
  const isError = Object.values(formik.errors);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        height: { xs: "56px", sm: "92px" },
        position: "fixed",
        top:0,
        left: "50%",
        right: "50%",
        transform: "translate(-50%)",
        marginTop: isError.length > 0 ? "0" : "-510px",
        display: "grid",
        placeItems: "center",
        bgcolor: "rgb(253, 237, 237)",
        zIndex: 3,
      }}
    >
      <Alert
        severity="error"
        sx={{
          height: "fit-content",
        }}
      >
        Wypełnij pola formulaża
      </Alert>
    </Box>
  );
};

export default StepFormAlert;
