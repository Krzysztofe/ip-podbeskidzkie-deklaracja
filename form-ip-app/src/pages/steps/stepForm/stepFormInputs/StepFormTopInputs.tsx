import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";

const StepFormTopInputs = () => {
  const { formik } = useContext(StepsContext);

  const dataTextInputs = [
    { label: "Imię", value: "name", type: "text" },
    { label: "Nazwisko", value: "surname", type: "text" },
    { label: "Aders", value: "adress", type: "text" },
    { label: "Telefon", value: "phone", type: "number" },
    { label: "E-mail", value: "email", type: "email" },
  ];

  return (
    <>
      {dataTextInputs.map(({ label, value, type }) => {
        return (
          <FormGroup key={label}>
            <TextField
              key={label}
              type={type}
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

export default StepFormTopInputs;
