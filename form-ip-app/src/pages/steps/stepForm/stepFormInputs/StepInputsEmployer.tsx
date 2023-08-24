import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../inputsPrintElements/InputsErrors";
import { Typography } from "@mui/material";
import InputsHeading from "../inputsPrintElements/InputsHeading";

const StepFormEployer = () => {
  const { formik } = useContext(StepsContext);

  const handleEmployerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ employer: "", employerOther: "" });
      await formik.validateForm();
      formik.setFieldValue("employerOther", "");
    }
  };

  const handleLoginChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ employer: "", employerOther: "" });
      await formik.validateForm();
      formik.setFieldValue("employer", "");
    }
  };

  return (
    <>
      <InputsHeading headingText={"Pracodawca:"} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="employer"
          value={formik.values.employer}
          onChange={handleEmployerChange}
          onBlur={formik.handleBlur}
          sx={{
            maxWidth: 200,
            width: "60%",
            marginLeft: { xs: "auto", sm: "40%" },
          }}
        >
          {["Amazon", "Adecco", "Randstad"].map(employer => {
            return (
              <FormControlLabel
                key={employer}
                value={employer}
                control={
                  <Radio
                    sx={
                      {
                        // marginRight: "calc(60% )",
                      }
                    }
                  />
                }
                label={employer}
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
            maxWidth: 200,
            width: "60%",
            marginLeft: { xs: "auto", sm: "40%" },
            mt: 1,
          }}
        >
          <TextField
            type={"text"}
            name={"employerOther"}
            label={"Inny"}
            value={formik.values.employerOther}
            onChange={handleLoginChange}
            onBlur={formik.handleBlur}
            size="small"
            // sx={{
            //   maxWidth: 200,
            //   width: "60%",
            //   marginLeft: { xs: "auto", sm: 18 },
            // }}
          />

          <InputsErrors
            value={"employer"}
            otherValue={"employerOther"}
            formik={formik}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default StepFormEployer;
