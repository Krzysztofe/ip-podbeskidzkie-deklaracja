import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { dataClauseParagraphs } from "./dataStepClause";
import StepClauseForm from "./stepClauseForm/StepClauseForm";
import InputsHeading from "../stepForm/inputsPrintElements/InputsHeading";

const StepClause = () => {
  return (
    <Box sx={{bgcolor:"secondary.light"}}>
      <InputsHeading headingText={" KLAUZULA INFORMACYNA"} />

      {dataClauseParagraphs.map(paragraph => {
        return (
          <Typography
            key={paragraph}
            variant="body2"
            sx={{ py: 1, maxWidth: 400, marginInline:"auto" }}
          >
            {paragraph}
          </Typography>
        );
      })}

      <StepClauseForm />
    </Box>
  );
};

export default StepClause;
