import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StepInputsContract = () => {
  const { formik } = useContext(StepsContext);

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ p: 1, fontWeight: "bold" }}
      >
        Umowa:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="contract"
        value={formik.values.contract}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {[
          "Na czas nieokreślony",
          "Na czas określony",
          "Okres próbny",
          "Umowa zlecenie",
        ].map(contract => {
          return (
            <FormControlLabel
              key={contract}
              value={contract}
              control={<Radio />}
              label={contract}
            />
          );
        })}
      </RadioGroup>

      <Typography variant="body1">
        {formik.touched.contract && formik.errors.contract && (
          <span style={{ color: "red" }}>{formik.errors.contract}</span>
        )}
      </Typography>
    </FormControl>
  );
};

export default StepInputsContract;
