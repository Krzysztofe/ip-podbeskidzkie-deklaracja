import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/stepFormInputs/InputsErrors";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <>
      <Box
        sx={{
          height: {
            xs: "74px",
            sm: "72px",
          },
          // py: { xs: 1.6, md: 1.5 },
          pl: { xs: 1.6, sm: 0 },
          borderBottom: 1,
          borderColor: "info.light",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checkedIcon={<CheckCircleOutlineIcon />}
              icon={<HighlightOffIcon />}
              sx={{ "&:hover": { boxShadow: 2 } }}
            />
          }
          name="confirmation"
          checked={formikClause.values.confirmation}
          onChange={formikClause.handleChange}
          label="Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach i w celach w niej wskazanych"
          sx={{
            "& .MuiFormControlLabel-label": {
              color: formikClause.values.confirmation
                ? "primary.main"
                : "main.dark",
              fontSize: theme => theme.typography.fs_12_rg,
            },
          }}
        />
        <Box
          sx={{
            ml: 3.2,
            position: "absolute",
            bottom: { xs: "-11px", sm: "-8px", md: "-1px" },
          }}
        >
          <InputsErrors
            formik={formikClause}
            value={"confirmation"}
            otherValue={null}
          />
        </Box>
      </Box>
    </>
  );
};

export default StepClauseForm;
