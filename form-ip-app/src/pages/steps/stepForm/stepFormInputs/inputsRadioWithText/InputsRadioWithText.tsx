import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import HeadingPrimary from "../../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../../context/ContextProv";
import InputsErrors from "../InputsErrors";
import TextField from "@mui/material/TextField";
import { handleRadioChange } from "./utilsRadioWithText";
import { handleTextChange } from "./utilsRadioWithText";

type Props = {
  headingText: string;
  inputsData: string[];
  radioValue: string;
  textValue: string;
};

const InputsRadioWithText = (props: Props) => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <HeadingPrimary headingText={props.headingText} />

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name={props.radioValue}
          value={formik.values[props.radioValue as keyof typeof formik.values]}
          onChange={e =>
            handleRadioChange(e, formik, props.radioValue, props.textValue)
          }
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {props.inputsData.map(data => {
            return (
              <FormControlLabel
                key={data}
                value={data}
                control={<Radio sx={{ pl: 0 }} />}
                label={data}
                sx={{
                  ml: "5px",
                  "& .MuiFormControlLabel-label": {
                    mr: 1,
                    color: "info.dark",
                    fontSize: theme => theme.typography.fs_16_rg,
                  },
                }}
              />
            );
          })}
        </RadioGroup>

        <Box
          sx={{
            maxWidth: "24rem",
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
          }}
        >
          <TextField
            type={"text"}
            name={props.textValue}
            label={"Inny"}
            value={formik.values[props.textValue as keyof typeof formik.values]}
            onChange={e =>
              handleTextChange(e, formik, props.radioValue, props.textValue)
            }
            onBlur={formik.handleBlur}
            size="small"
            sx={{ width: "100%" }}
          />

          <InputsErrors
            value={props.textValue}
            otherValue={props.textValue}
            formik={formik}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsRadioWithText;
