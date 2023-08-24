import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../inputsPrintElements/InputsErrors";
import InputsHeading from "../inputsPrintElements/InputsHeading";
import Box from "@mui/material/Box";

const StepInputsWorkplace = () => {
  const { formik } = useContext(StepsContext);
  const handleEmployerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ workplace: "", workplaceOther: "" });
      await formik.validateForm();
      formik.setFieldValue("workplaceOther", "");
    }
  };

  const handleEmployerOtherChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ workplace: "", workplaceOther: "" });
      await formik.validateForm();
      formik.setFieldValue("workplace", "");
    }
  };

  return (
    <>
      <InputsHeading headingText={"Miejsce Pracy:"} />
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="workplace"
          value={formik.values.workplace}
          onChange={handleEmployerChange}
          onBlur={formik.handleBlur}
          sx={{
            maxWidth: 200,
            width: "60%",
            marginLeft: { xs: "auto", sm: "40%" },
          }}
        >
          {["poz1", "wro1", "wro2", "wro5", "lcj", "ktw1", "ktw3", "szzl"].map(
            workplace => {
              return (
                <FormControlLabel
                  key={workplace}
                  value={workplace}
                  control={
                    <Radio
                    // sx={{
                    //   marginRight: "calc(60% - 30px)",
                    // }}
                    />
                  }
                  label={workplace}
                  sx={{
                    ml: -1,
                    "& .MuiFormControlLabel-label": {
                      mr: 1,
                      color: "info.main",
                    },
                  }}
                />
              );
            }
          )}
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
            name={"workplaceOther"}
            label={"Inne"}
            value={formik.values.workplaceOther}
            onChange={handleEmployerOtherChange}
            onBlur={formik.handleBlur}
            size="small"
          />
          <InputsErrors
            value={"workplace"}
            otherValue={"workplaceOther"}
            formik={formik}
          />
        </Box>
      </FormControl>
    </>
  );
};

export default StepInputsWorkplace;
