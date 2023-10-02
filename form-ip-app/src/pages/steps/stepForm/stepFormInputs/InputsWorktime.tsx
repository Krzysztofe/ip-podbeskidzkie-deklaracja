import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";
import TextField from "@mui/material/TextField";

const InputsWorktime = () => {
  const { formik } = useContext(StepsContext);

  const handleWorkTimeChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ worktime: "", workTimeOther: "" });
      await formik.validateForm();
      formik.setFieldValue("workTimeOther", "");
    }
  };

  const handleWorkTimeOtherChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    formik.handleChange(event);
    if (event.target.value !== "") {
      formik.setErrors({ worktime: "", workTimeOther: "" });
      await formik.validateForm();
      formik.setFieldValue("worktime", "");
    }
  };

  console.log("", formik.values);

  return (
    <>
      <HeadingPrimary headingText={"Wymiar czasu pracy:"} />

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="worktime"
          value={formik.values.worktime}
          onChange={handleWorkTimeChange}
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {["Cały etat", "Pół etatu"].map(worktime => {
            return (
              <FormControlLabel
                key={worktime}
                value={worktime}
                control={<Radio sx={{ pl: 0 }} />}
                label={worktime}
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
            name={"workTimeOther"}
            label={"Inny"}
            value={formik.values.workTimeOther}
            onChange={handleWorkTimeOtherChange}
            onBlur={formik.handleBlur}
            size="small"
            sx={{ width: "100%" }}
          />

          <InputsErrors
            value={"workTimeOther"}
            otherValue={"workTimeOther"}
            formik={formik}
          />
        </Box>

        {/* <Box
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            marginLeft: { xs: "auto", sm: "40%" },
            mt: 1,
            pl:0.5
          }}
        >
          <InputsErrors formik={formik} value={"worktime"} />
        </Box> */}
      </FormControl>
    </>
  );
};

export default InputsWorktime;
