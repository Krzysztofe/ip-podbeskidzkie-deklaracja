import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../inputsPrintElements/InputsErrors";
import InputsHeading from "../inputsPrintElements/InputsHeading";
import { Box } from "@mui/material";

const StepInputsContract = () => {
  const { formik } = useContext(StepsContext);

  return (
    <FormControl sx={{ width: "100%" }}>
      <InputsHeading headingText={"Umowa:"} />
      <RadioGroup
        name="contract"
        value={formik.values.contract}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          maxWidth: 200,
          width: "60%",
          marginLeft: { xs: "auto", sm: "40%" },
        }}
      >
        {[
          "Na czas nieokreślony",
          "Na czas określony",
          "Okres próbny",
          "Umowa zlecenie",
        ].map(contract => {
          return (
            <FormControlLabel
              key={contract}
              value={contract}
              control={
                <Radio
                // sx={{
                //   marginRight: "calc(60% - 30px)",
                // }}
                />
              }
              label={contract}
            
              sx={{
                ml: -1,
                "& .MuiFormControlLabel-label": {
                  mr: 1,
                  color: "info.main",
                },
              }}
            />
          );
        })}
      </RadioGroup>
      <Box
        sx={{
          width: "60%",
          marginLeft: "auto",
        }}
      >
        <InputsErrors formik={formik} value={"contract"} otherValue={null} />
      </Box>
    </FormControl>
  );
};

export default StepInputsContract;
