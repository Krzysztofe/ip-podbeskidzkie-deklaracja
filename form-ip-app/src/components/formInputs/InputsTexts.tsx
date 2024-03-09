import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { useFormikContext } from "formik";
import HeadingPrimary from "../HeadingPrimary";
import { rwd } from "../../utils/rwd";
import InputsErrors from "./InputsErrors";
import { useFormMemberStore } from "../../zustandStores/useFormMemberStore";
import { useEffect } from "react";
import { ModelMember } from "../../sharedModels/ModelMember";

type Props = {
  headingText: string;
  inputsData: { label: string; value: string; type: string }[];
};

const InputsTexts = (props: Props) => {
  const { values, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<ModelMember>();

  const setError = useFormMemberStore(state => state.setError);

  useEffect(() => {
    setError(errors);
  }, [errors]);

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
              value={values[value as keyof typeof values]}
              onChange={e => setFieldValue(value, e.target.value)}
              onBlur={handleBlur}
              size="small"
              sx={{
                "& .MuiInputBase-input": {
                  color: "info.main",
                },
              }}
            />

            <InputsErrors value={value} errors={errors} touched={touched} />
          </FormGroup>
        );
      })}
    </>
  );
};

export default InputsTexts;
