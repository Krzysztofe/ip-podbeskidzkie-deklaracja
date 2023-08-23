import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const StepInputsMembership = () => {
  const { formik } = useContext(StepsContext);

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ p: 1, fontWeight: "bold" }}
      >
        Przynależność do innych związków:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="membership"
        value={formik.values.membership}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {[
          "Nie należę do innego związku zawodowego u pracodawcy.",
          "Należę do innego związku zawodowego u pracodawcy, jednak chcę pry podawaniu informacji o liczbie członków może członkowstwo uwzgędniał wyłącznie OZZIP.",
          "Należę do inngeo związku zawodowego u pracodawcy i nie chcę by przy podawaniu informacji i liczbie członków OZZIP uwzględniał moje członkostwo.",
        ].map(membership => {
          return (
            <FormControlLabel
              key={membership}
              value={membership}
              control={<Radio />}
              label={membership}
            />
          );
        })}
      </RadioGroup>

      <Typography variant="body1">
        {formik.touched.membership &&
          formik.errors.membership && (
            <span style={{ color: "red" }}>{formik.errors.membership}</span>
          )}
      </Typography>
    </FormControl>
  );
};

export default StepInputsMembership;
