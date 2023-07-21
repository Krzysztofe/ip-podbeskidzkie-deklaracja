import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormHeader from "../FormHeader";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";

interface Props {
  formik: any;
}

const StepForm = (props: Props) => {
  const [isTextFieldFocused, setIsTextFieldFocused] = useState(false); // State to track focus

  const dataTextInputs = [
    { label: "Imię", value: "name", type: "text" },
    { label: "Nazwisko", value: "surname", type: "text" },
    { label: "Aders", value: "adress", type: "text" },
    { label: "Telefon", value: "phone", type: "number" },
    { label: "E-mail", value: "email", type: "email" },
  ];

  // console.log("", isTextFieldFocused);
  console.log("err", props.formik.errors);
  console.log("", props.formik.values);

  const handleEmployerChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.formik.handleChange(event);
    if (event.target.value !== "") {
      props.formik.setErrors({ employer: "", employerOther: "" });
      await props.formik.validateForm();
      props.formik.setFieldValue("employerOther", "");
    }
  };

  const handleLoginChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.formik.handleChange(event);
    if (event.target.value !== "") {
      props.formik.setErrors({ employer: "", employerOther: "" });
      await props.formik.validateForm();
      props.formik.setFieldValue("employer", "");
    }
  };

  return (
    <>
      <FormHeader />
      {dataTextInputs.map(({ label, value, type }) => {
        return (
          <FormGroup key={label}>
            <TextField
              key={label}
              type={type}
              id={value}
              name={value}
              label={label}
              value={props.formik.values[value]}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
              size="small"
            />
            <Typography variant="body1">
              {props.formik.touched[value] && props.formik.errors[value] && (
                <span style={{ color: "red" }}>
                  {props.formik.errors[value]}
                </span>
              )}
            </Typography>
          </FormGroup>
        );
      })}
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Pracodawca
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="employer"
          value={props.formik.values.employer}
          onChange={handleEmployerChange}
          onBlur={props.formik.handleBlur}
        >
          <FormControlLabel
            value="Amazon"
            onBlur={props.formik.handleBlur}
            control={<Radio />}
            label="Amazon"
          />
          <FormControlLabel
            value="Adecco"
            onBlur={props.formik.handleBlur}
            control={<Radio />}
            label="Adecco"
          />
          <FormControlLabel
            value="Randstad"
            onBlur={props.formik.handleBlur}
            control={<Radio />}
            label="Randstad"
          />
          <TextField
            type={"text"}
            name={"employerOther"}
            label={"Inny"}
            value={props.formik.values.employerOther}
            onChange={handleLoginChange}
            onBlur={props.formik.handleBlur}
            size="small"
          />

          <Typography variant="body1">
            {(props.formik.touched.employer ||
              props.formik.touched.employerOther) &&
              props.formik.errors.employer && (
                <span style={{ color: "red" }}>
                  {props.formik.errors.employer}
                </span>
              )}
          </Typography>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default StepForm;
