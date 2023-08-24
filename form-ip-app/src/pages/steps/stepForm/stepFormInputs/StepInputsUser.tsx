import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../inputsPrintElements/InputsErrors";
import InputsHeading from "../inputsPrintElements/InputsHeading";

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
      <InputsHeading headingText={"Twoje dane:"} />
      {dataTextInputs.map(({ label, value, type }) => {
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

            <InputsErrors value={value} otherValue={null} formik={formik} />
          </FormGroup>
        );
      })}
    </>
  );
};

export default StepInputsUser;
