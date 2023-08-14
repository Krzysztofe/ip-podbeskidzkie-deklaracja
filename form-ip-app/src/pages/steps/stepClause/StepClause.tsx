import { FormHelperText } from "@mui/material";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import { dataClauseParagraphs } from "./dataStepClause";

const StepClause = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <Card>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        KLAUZULA INFORMACYNA
      </Typography>
      {dataClauseParagraphs.map(paragraph => {
        return (
          <Typography key={paragraph} variant="body2" sx={{ p: 0.5 }}>
            {paragraph}
          </Typography>
        );
      })}
      <FormControlLabel
        control={<Checkbox />}
        name="confirmation"
        checked={formikClause.values.confirmation}
        onChange={formikClause.handleChange}
        label="Potwierdzam...."
      />
      <Typography>
        {formikClause.touched.confirmation &&
          formikClause.errors.confirmation && (
            <span style={{ color: "red" }}>
              
              {formikClause.errors.confirmation.toString()}
            </span>
          )}
      </Typography>
    </Card>
  );
};

export default StepClause;
