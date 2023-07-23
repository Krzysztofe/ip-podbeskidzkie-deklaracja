import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";

const StepInputsDepartment = () => {
  const { formik } = useContext(StepsContext);
  return (
    <>
      {[
        { label: "Dział", value: "department" },
        { label: "Login", value: "login" },
      ].map(({ label, value }) => {
        return (
          <FormGroup key={label}>
            <TextField
              type="text"
              id={value}
              name={value}
              label={label}
              value={formik.values[value as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="small"
            />
            <Typography variant="body1">
              {formik.touched[value as keyof typeof formik.touched] &&
                formik.errors[value as keyof typeof formik.errors] && (
                  <span style={{ color: "red" }}>
                    {formik.errors[value as keyof typeof formik.errors]}
                  </span>
                )}
            </Typography>
          </FormGroup>
        );
      })}
    </>
  );
};

export default StepInputsDepartment;
