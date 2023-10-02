import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";

const InputsWorkplace = () => {
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
      <HeadingPrimary headingText={"Miejsce Pracy:"} />

      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          name="workplace"
          value={formik.values.workplace}
          onChange={handleEmployerChange}
          onBlur={formik.handleBlur}
          sx={{
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
            mt: { xs: 4.2, sm: 5.9 },
          }}
        >
          {[
            "poz1",
            "poz2",
            "wro1",
            "wro2",
            "wro4",
            "wro5",
            "lcj",
            "lcj2",
            "lcj3",
            "lcj4",
            "ktw1",
            "ktw3",
            "ktw4",
            "szzl",
          ].map(workplace => {
            return (
              <FormControlLabel
                key={workplace}
                value={workplace}
                control={<Radio />}
                label={workplace}
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
            maxWidth: "24rem",
            width: { xs: "80%", sm: "60%" },
            marginInline: "auto",
            ml: { xs: "auto", sm: "40%" },
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
            sx={{ width: "100%" }}
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

export default InputsWorkplace;
