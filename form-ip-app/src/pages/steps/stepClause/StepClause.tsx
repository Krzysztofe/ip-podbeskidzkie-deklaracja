import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";
import { dataClauseParagraphs } from "./dataStepClause";
import StepClauseForm from "./stepClauseForm/StepClauseForm";

const StepClause = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.light",
          px: { xs: 3.2, md: 13.8 },
          py: { xs: 4.2, md: 5.7 },
          mx: { xs: -1.6, md: 0 },
        }}
      >
        <Box sx={{ mb: 2.5 }}>
          <HeadingPrimary headingText={"Zapoznaj się z klauzulą informacyjną"} />
        </Box>

        <Box>
          {dataClauseParagraphs.map(paragraph => {
            return (
              <Typography
                key={paragraph}
                variant="fs_16_rg"
                component="p"
                color="info.dark"
                sx={{ py: 1 }}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default StepClause;
