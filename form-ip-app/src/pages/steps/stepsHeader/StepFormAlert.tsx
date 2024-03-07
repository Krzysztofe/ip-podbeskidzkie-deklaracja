import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useFormStore } from "../../../zustandStores/useFormStore";

type Errors = {
  confirmation?: string;
};

const StepFormAlert = () => {
  const errors = useFormStore(state => state.isError);
  const errorsInForm: Errors = { ...errors };
  delete errorsInForm?.confirmation;

  const isError = Object.values(errorsInForm);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: "50%",
        right: "50%",
        transform:
          isError.length > 0 ? "translate(-50%)" : "translate(-50%, -100%)",
        transition: "0.5s",
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
        Wypełnij pola formularza
      </Alert>
    </Box>
  );
};

export default StepFormAlert;
