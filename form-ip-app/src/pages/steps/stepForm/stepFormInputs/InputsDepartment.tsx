import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";

const InputsDepartment = () => {
  const { formik } = useContext(StepsContext);
  return (
    <Box sx={{ pt: 2 }}>
      {[
        { label: "Dział", value: "department" },
        { label: "Login", value: "login" },
      ].map(({ label, value }, idx) => {
        return (
          <FormGroup
            key={label}
            sx={{
              maxWidth: "24rem",
              width: { xs: "80%", sm: "60%" },
              marginInline: "auto",
              ml: { xs: "auto", sm: "40%" },
              mt: idx === 0 ? { xs: 2, sm: 4 } : 0,
            }}
          >
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
            <InputsErrors formik={formik} value={value} />
          </FormGroup>
        );
      })}
    </Box>
  );
};

export default InputsDepartment;
