import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import { useTheme } from "@mui/material/styles";
import TextInputsErrors from "../inputsErrors/TextInputsErrors";

const StepInputsUser = () => {
  const { formik } = useContext(StepsContext);

  const dataTextInputs = [
    { label: "Imię", value: "name", type: "text" },
    { label: "Nazwisko", value: "surname", type: "text" },
    { label: "Adres", value: "address", type: "text" },
    { label: "Telefon", value: "phone", type: "tel" },
    { label: "E-mail", value: "email", type: "email" },
  ];

  return (
    <>
      <Typography variant="subtitle1" color="primary" mb={3}>
        Twoje dane:
      </Typography>
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
            {/* <Box sx={{ height: theme => theme.spacing(3) }}>
              {formik.touched[value as keyof typeof formik.touched] &&
                formik.errors[value as keyof typeof formik.errors] && (
                  <Typography variant="subtitle2" color="error">
                    {formik.errors[value as keyof typeof formik.errors]}
                  </Typography>
                )}
            </Box> */}
            <TextInputsErrors formik={formik} value={value} />
          </FormGroup>
        );
      })}
    </>
  );
};

export default StepInputsUser;
