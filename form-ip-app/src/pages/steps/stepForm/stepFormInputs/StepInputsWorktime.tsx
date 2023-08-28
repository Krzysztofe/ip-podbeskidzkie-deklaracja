import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputsErrors from "../inputsPrintElements/InputsErrors";
import InputsHeading from "../inputsPrintElements/InputsHeading";

const StepInputsWorktime = () => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <InputsHeading headingText={" Wymiar czasu pracy:"} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="worktime"
          value={formik.values.worktime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{
            maxWidth: 200,
            width: "60%",
            marginLeft: { xs: "auto", sm: "40%" },
          }}
        >
          {["Cały etat", "Pół etatu"].map(worktime => {
            return (
              <FormControlLabel
                key={worktime}
                value={worktime}
                control={<Radio />}
                label={worktime}
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
          <InputsErrors formik={formik} value={"worktime"} otherValue={null} />
        </Box>
      </FormControl>
    </>
  );
};

export default StepInputsWorktime;
