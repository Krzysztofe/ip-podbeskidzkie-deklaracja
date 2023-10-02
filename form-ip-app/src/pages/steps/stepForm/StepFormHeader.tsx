import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";

const StepFormHeader = () => {
  return (
    <Box py={3.9} borderBottom={1} borderColor={"info.light"}>
      <Typography variant="h1" color="info.dark" mb={4.2}>
        Deklaracja Przystąpienia <br />
        do OZZIP Amazon
      </Typography>

      <HeadingPrimary headingText={"Wypełnij formularz"} />

      <Typography
        variant="fs_12_sb"
        component="p"
        color="info.dark"
        sx={{ mt: { xs: 3.9, sm: 2 } }}
      >
       Przekazane dane są wyłącznie do wiadomości OZZIP Amazon
      </Typography>
      <Typography
        variant="fs_12_sb"
        component="p"
        color="info.dark"
        sx={{ mt: { xs: 3.9, sm: 2 } }}
      >
        DEKLARACJA
      </Typography>
      <Typography variant="fs_12_rg" color="info.dark">
        Ja, niżej wskazany/wskazana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </Box>
  );
};

export default StepFormHeader;
