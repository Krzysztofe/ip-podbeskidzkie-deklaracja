import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StepFormEployer = () => {
  const { formik } = useContext(StepsContext);

  const handleEmployerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ employer: "", employerOther: "" });
      await formik.validateForm();
      formik.setFieldValue("employerOther", "");
    }
  };

  const handleLoginChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ employer: "", employerOther: "" });
      await formik.validateForm();
      formik.setFieldValue("employer", "");
    }
  };

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ p: 1, fontWeight: "bold" }}
      >
        Pracodawca:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="employer"
        value={formik.values.employer}
        onChange={handleEmployerChange}
        onBlur={formik.handleBlur}
      >
        {["Amazon", "Adecco", "Randstad"].map(employer => {
          return (
            <FormControlLabel
              key={employer}
              value={employer}
              control={<Radio />}
              label={employer}
            />
          );
        })}
      </RadioGroup>
      <TextField
        type={"text"}
        name={"employerOther"}
        label={"Inny"}
        value={formik.values.employerOther}
        onChange={handleLoginChange}
        onBlur={formik.handleBlur}
        size="small"
      /> 

      <Typography variant="body1">
        {(formik.touched.employer || formik.touched.employerOther) &&
          formik.errors.employer && (
            <span style={{ color: "red" }}>{formik.errors.employer}</span>
          )}
      </Typography>
    </FormControl>
  );
};

export default StepFormEployer;
