import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import HeadingPrimary from "../../../components/HeadingPrimary";


const StepFormHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 3.9,
        borderBottom: `1px solid ${theme.palette.info.light}`,
      }}
    >
      <Typography variant="h1" color="info.dark" sx={{ mb: 4.2 }}>
        Deklaracja Przystąpienia <br />
        do OZZIP Amazon
      </Typography>

     
      <HeadingPrimary
        headingText={"Wypełnij formulaż"}
      />

      <Typography
        variant="fs_12_sb"
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
