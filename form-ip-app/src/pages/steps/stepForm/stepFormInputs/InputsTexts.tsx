import { StepsContext } from "../../../../context/ContextProv";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import InputsErrors from "./InputsErrors";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { rwd } from "../../../../utils/rwd";

type Props = {
  headingText: string;
  inputsData: { label: string; value: string; type: string }[];
};

const InputsTexts = (props: Props) => {
  const { formik } = useContext(StepsContext);


  return (
    <>
      <HeadingPrimary headingText={props.headingText} />
      {props.inputsData.map(({ label, value, type }, idx) => {
        return (
          <FormGroup
            key={label}
            sx={{
              maxWidth: "24rem",
              width: rwd("80%", "60%"),
              marginInline: "auto",
              ml: rwd("auto", "40%"),
              mt: idx === 0 ? rwd(4.2, 5.9) : 0,
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

export default InputsTexts;
