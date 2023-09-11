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
        maxWidth: "1400px",
        width: "100%",
        height: "10vh",
        position: "fixed",
        left: "50%",
        right: "50%",
        transform: "translate(-50%)",
        marginTop: isError.length > 0 ? "-10vh" : "-510px",
        display: "grid",
        placeItems: "center",
        // border: 3,
        bgcolor: "rgb(253, 237, 237)",
      }}
    >
      <Alert
        severity="error"
        sx={{
          // width:"100%",
          height: "fit-content",
          // maxWidth: "1400px",
          // width: "100%",
          // height: "10vh",
          // position: "fixed",
          // left: "50%",
          // right: "50%",
          // transform: "translate(-50%)",
          p: 0,
          zIndex: "100",
          // marginTop: isError.length > 0 ? "-10vh" : "-510px",
          // transitionDuratio: "500ms",
        }}
      >
        <div>Wypełnij pola formulaża</div>
      </Alert>
    </Box>
  );
};

export default StepFormAlert;
