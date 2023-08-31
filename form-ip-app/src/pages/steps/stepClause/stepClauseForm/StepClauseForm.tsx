import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/stepFormInputs/InputsErrors";
import Container from "@mui/material/Container";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <>
      <Container
        sx={{
          // display: "flex",
          // alignItems: "center"
          // flexDirection: "column",
          // justifyContent: "end",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          name="confirmation"
          checked={formikClause.values.confirmation}
          onChange={formikClause.handleChange}
          label="Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetważanie moich danych osobowych na zasadach i w celach w niej wskazanych"
          sx={{
            "& .css-1ismtrt-MuiTypography-root": {
              color: "main.dark",
              fontSize: theme => theme.typography.fs_12_rg,
            },
          }}
        />
        <Box sx={{ ml: 4, position: "absolute", bottom: 0 }}>
          <InputsErrors
            formik={formikClause}
            value={"confirmation"}
            otherValue={null}
          />
        </Box>
      </Container>
    </>
  );
};

export default StepClauseForm;
