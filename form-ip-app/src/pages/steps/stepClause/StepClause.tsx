import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { dataClauseParagraphs } from "./dataStepClause";
import StepClauseForm from "./stepClauseForm/StepClauseForm";

const StepClause = () => {
  return (
    <Box sx={{}}>
      <Typography variant="subtitle1" color="primary" sx={{ my: 2 }}>
        KLAUZULA INFORMACYNA
      </Typography>
      {dataClauseParagraphs.map(paragraph => {
        return (
          <Typography key={paragraph} variant="body2" sx={{ py: 1 }}>
            {paragraph}
          </Typography>
        );
      })}

      <StepClauseForm />
    </Box>
  );
};

export default StepClause;
