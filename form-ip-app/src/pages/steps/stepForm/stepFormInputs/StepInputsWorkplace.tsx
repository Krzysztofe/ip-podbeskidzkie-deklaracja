import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StepInputsWorkplace = () => {
  const { formik } = useContext(StepsContext);
  const handleEmployerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ workplace: "", workplaceOther: "" });
      await formik.validateForm();
      formik.setFieldValue("workplaceOther", "");
    }
  };

  const handleEmployerOtherChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ workplace: "", workplaceOther: "" });
      await formik.validateForm();
      formik.setFieldValue("workplace", "");
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Miejsce Pracy:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="workplace"
        value={formik.values.workplace}
        onChange={handleEmployerChange}
        onBlur={formik.handleBlur}
      >
        {["poz1", "wro1", "wro2", "wro5", "lcj", "ktw1", "ktw3", "szzl"].map(
          workplace => {
            return (
              <FormControlLabel
                key={workplace}
                value={workplace}
                control={<Radio />}
                label={workplace}
              />
            );
          }
        )}
      </RadioGroup>
      <TextField
        type={"text"}
        name={"workplaceOther"}
        label={"Inne"}
        value={formik.values.workplaceOther}
        onChange={handleEmployerOtherChange}
        onBlur={formik.handleBlur}
        size="small"
      />

      <Typography variant="body1">
        {(formik.touched.workplace || formik.touched.workplaceOther) &&
          formik.errors.workplace && (
            <span style={{ color: "red" }}>{formik.errors.workplace}</span>
          )}
      </Typography>
    </FormControl>
  );
};

export default StepInputsWorkplace;
