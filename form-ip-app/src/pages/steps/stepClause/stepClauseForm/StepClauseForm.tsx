import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/inputsPrintElements/InputsErrors";
import Box from "@mui/material/Box";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: theme => theme.spacing(13),
        left: 0,
        backgroundColor: "white",
        width: "100%",
        height: {
          xs: "7rem",
          sm: "4rem",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderTop: 1,
        borderBottom: 1,
        borderColor: "info.light",
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        name="confirmation"
        checked={formikClause.values.confirmation}
        onChange={formikClause.handleChange}
        label="Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetważanie moich danych osobowych na zasadach i w celach w niej wskazanych"
        sx={{
          "& .css-19rnxuj-MuiTypography-root": {
            color: "info.main",
          },
        }}
      />
      <Box sx={{ ml: 4 }}>
        <InputsErrors
          formik={formikClause}
          value={"confirmation"}
          otherValue={null}
        />
      </Box>
    </Box>
  );
};

export default StepClauseForm;
