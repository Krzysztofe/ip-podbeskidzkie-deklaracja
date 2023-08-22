import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const StepFormHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingBlock: 4,
        borderBottom: `1px solid ${theme.palette.info.light}`,
      }}
    >
      <Typography variant="h1" color="info.dark">
        Deklaracja Przystąpienia do OZZIP Amazon
      </Typography>
      <Typography
        variant="h5"
        color="primary"
        sx={{ margin: 0, marginTop: "2.2rem", marginBottom: "1.1rem" }}
      >
        Wypełnij deklarację w 4 krokach
      </Typography>

      <Typography variant="body1" color="info.dark">
        DEKLARACJA
      </Typography>
      <Typography variant="body2">
        Ja, niżej wskazany/wskazana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </Box>
  );
};

export default StepFormHeader;
