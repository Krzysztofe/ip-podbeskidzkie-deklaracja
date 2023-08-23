import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StepInputsWorktime = () => {
  const { formik } = useContext(StepsContext);


  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ p: 1, fontWeight: "bold" }}
      >
        Wymiar czasu pracy:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="worktime"
        value={formik.values.worktime}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {["Cały etat", "Pół etatu"].map(worktime => {
          return (
            <FormControlLabel
              key={worktime}
              value={worktime}
              control={<Radio />}
              label={worktime}
            />
          );
        })}
      </RadioGroup>

      <Typography variant="body1">
        {formik.touched.worktime &&
          formik.errors.worktime && (
            <span style={{ color: "red" }}>{formik.errors.worktime}</span>
          )}
      </Typography>
    </FormControl>
  );
};

export default StepInputsWorktime;
