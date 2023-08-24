import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../inputsPrintElements/InputsErrors";

const StepInputsDepartment = () => {
  const { formik } = useContext(StepsContext);
  return (
    <Box sx={{ pt: 4 }}>
      {[
        { label: "Dział", value: "department" },
        { label: "Login", value: "login" },
      ].map(({ label, value }) => {
        return (
          <FormGroup
            key={label}
            sx={{
              maxWidth: 200,
              width: "60%",
              marginLeft: { xs: "auto", sm: "40%" },
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
            <InputsErrors formik={formik} value={value} otherValue={null} />
          </FormGroup>
        );
      })}
    </Box>
  );
};

export default StepInputsDepartment;
