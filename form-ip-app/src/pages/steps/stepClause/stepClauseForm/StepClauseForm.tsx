import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/stepFormInputs/InputsErrors";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  const StyledLabel = styled(FormControlLabel)(({ theme }) => ({
    color: "green",
  }));

  return (
    <>
      <Container
        sx={{
          paddingBlock: 2,
          borderBottom: 1,
          borderColor: "info.light"
        }}
      >
        <FormControlLabel
          control={<Checkbox color="secondary" />}
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
        <Box sx={{ ml: 4, position: "absolute" }}>
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
