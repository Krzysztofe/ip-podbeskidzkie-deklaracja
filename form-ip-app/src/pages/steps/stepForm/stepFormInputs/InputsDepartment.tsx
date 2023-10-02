import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import HeadingPrimary from "../../../../components/HeadingPrimary";
import { StepsContext } from "../../../../context/ContextProv";


const InputsDepartment = () => {
  const { formik } = useContext(StepsContext);

  return (
    <>
      <HeadingPrimary headingText={"Dział:"} />

      <FormGroup
        sx={{
          maxWidth: "24rem",
          width: { xs: "80%", sm: "60%" },
          marginInline: "auto",
          ml: { xs: "auto", sm: "40%" },
          mt: { xs: 4.2, sm: 5.9 },
        }}
      >
        <TextField
          type="text"
          id={"department"}
          name={"department"}
          label={"Dział"}
          value={formik.values.department}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          size="small"
        />
      </FormGroup>
    </>
  );
};

export default InputsDepartment;
