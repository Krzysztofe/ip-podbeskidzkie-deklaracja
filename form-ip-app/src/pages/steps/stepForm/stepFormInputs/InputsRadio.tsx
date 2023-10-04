import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";

type Props = {
  headingText: string;
  inputsData: string[];
  inputValue: string;
  membership?: boolean;
};

const InputsRadio = (props: Props) => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <HeadingPrimary headingText={props.headingText} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name={props.inputValue}
          value={formik.values[props.inputValue as keyof typeof formik.values]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {props.inputsData.map((data, idx) => {
            return (
              <FormControlLabel
                key={data}
                value={data}
                control={<Radio />}
                label={data}
                sx={{
                  mt: props.membership ? 2 : 0,
                  ml: -1,
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
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            marginLeft: { xs: "auto", sm: "40%" },
            mt: 1,
          }}
        >
          <InputsErrors formik={formik} value={props.inputValue} />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsRadio;
