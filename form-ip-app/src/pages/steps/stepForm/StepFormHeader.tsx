import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
import HeadingPrimary from "../../../components/HeadingPrimary";
import Stack from "@mui/material/Stack";


const StepFormHeader = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        paddingBlock: 4,
        borderBottom: `1px solid ${theme.palette.info.light}`,
      }}
    >
      <Typography variant="h1" color="info.dark" sx={{mb:5}}>
        Deklaracja Przystąpienia do OZZIP Amazon
      </Typography>

      <HeadingPrimary headingText={" Wstąp do komisji w 4 krokach"} />

      <Typography variant="fs_12_sb" color="info.dark" sx={{mt:2.5}}>
        DEKLARACJA
      </Typography>
      <Typography variant="fs_12_rg" color="info.dark">
        Ja, niżej wskazany/wskazana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </Stack>
  );
};

export default StepFormHeader;
