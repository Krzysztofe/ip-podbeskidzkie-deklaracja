import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";

const InputsContract = () => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <HeadingPrimary headingText={"Umowa:"} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="contract"
          value={formik.values.contract}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {[
            "Na czas nieokreślony",
            "Na czas określony",
            "Okres próbny",
            "Umowa zlecenie",
            "Umowa o pracę tymczasową (agecje)",
          ].map(contract => {
            return (
              <FormControlLabel
                key={contract}
                value={contract}
                control={<Radio />}
                label={contract}
                sx={{
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
          <InputsErrors formik={formik} value={"contract"} />
        </Box>
      </FormControl>
    </>
  );
};

export default InputsContract;
