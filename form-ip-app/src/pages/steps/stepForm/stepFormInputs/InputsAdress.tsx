import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import InputsErrors from "./InputsErrors";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

const InputsAdress = () => {
  const { formik } = useContext(StepsContext);

  const dataAdressInputs = [
    { label: "Miasto", value: "city", type: "text" },
    { label: "Ulica", value: "street", type: "text" },
    { label: "Nr mieszkania", value: "apartmentNumber", type: "text" },
    { label: "Kod pocztowy", value: "postCode", type: "text" },
  ];

  return (
    <>
      <HeadingPrimary headingText={"Twój adres:"} />
      {dataAdressInputs.map(({ label, value, type }, idx) => {
        return (
          <FormGroup
            key={label}
            sx={{
              maxWidth: "24rem",
              width: { xs: "80%", sm: "60%" },
              marginInline: "auto",
              ml: { xs: "auto", sm: "40%" },
              mt: idx === 0 ? { xs: 4.2, sm: 5.9 } : 0,
            }}
          >
            <TextField
              key={label}
              type={type}
              name={value}
              label={label}
              value={formik.values[value as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  color: "info.main",
                },
              }}
            />

            <InputsErrors value={value} formik={formik} />
          </FormGroup>
        );
      })}
    </>
  );
};

export default InputsAdress;
