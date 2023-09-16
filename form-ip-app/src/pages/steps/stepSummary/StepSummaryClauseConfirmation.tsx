import Typography from "@mui/material/Typography";

const StepSummaryClauseConfirmation = () => {
  return (
    <Typography
      variant="fs_12_rg"
      component="p"
      color="info.dark"
      sx={{
        textAlign: "center",
        mt: 1,
        maxWidth: 300,
        marginInline: "auto",
      }}
    >
      Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetważanie
      moich danych osobowych na zasadach i w celach w niej wskazanych.
    </Typography>
  );
};

export default StepSummaryClauseConfirmation;
