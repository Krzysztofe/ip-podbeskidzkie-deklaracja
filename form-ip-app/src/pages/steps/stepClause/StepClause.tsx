import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { dataClauseParagraphs } from "./dataStepClause";
import StepClauseForm from "./stepClauseForm/StepClauseForm";
import HeadingPrimary from "../../../components/HeadingPrimary";

const StepClause = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.light",
          paddingInline: { xs: 3, md: 16.4 },
          paddingBlock: 4,
          marginInline: { xs: -2, md: 0 },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <HeadingPrimary headingText={"KLAUZULA INFORMACYNA"} />
        </Box>

        <Box sx={{ pb: 2 }}>
          {dataClauseParagraphs.map(paragraph => {
            return (
              <Typography
                key={paragraph}
                variant="fs_16_rg"
                component="p"
                color="info.dark"
                sx={{ py: 1, marginInline: "auto" }}
              >
                {paragraph}
              </Typography>
            );
          })}
        </Box>
        <Box
          sx={{
            height: {
              xs: "7rem",
              sm: "6rem",
              md: "4rem",
            },
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "7rem", sm: "5rem" },
          left: 0,
          backgroundColor: "white",
          width: "100%",
          height: {
            xs: "7rem",
            sm: "6rem",
            md: "4rem",
          },
          display: "flex",
          alignItems: "center",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "info.light",
          outline: "10px solid white",
        }}
      >
        <StepClauseForm />
      </Box>
    </>
  );
};

export default StepClause;
