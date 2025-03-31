import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";
import { rwd } from "../../../utils/rwd";
import { Link } from "react-router-dom";

const StepFormHeader = () => {
  return (
    <Box py={3.9} borderBottom={1} borderColor={"info.light"}>
      <Typography variant="h1" color="info.dark" mb={4.2}>
        Deklaracja Przystąpienia do
        <br />
        OZZIP przy Auchan Polska
      </Typography>
      <Box>
        <Link
          to={"https://www.ozzip.pl/informacje/item/3087-inicjatywa-auchan"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="fs_16_sb"
            component="p"
            sx={{
              py:2,
             color: "primary.main",
              transition: "color 0.3s",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            Klikinij, aby przeczytać o ostatnim sukcesie naszej komisji w Auchan --{">"}
          </Typography>
        </Link>
      </Box>

      <HeadingPrimary
        headingText={
          "Przekazane dane są wyłącznie do wiadomości OZZIP przy Auchan Polska. Pracodawca nie uzyska do nich dostępu."
        }
      />

      <Box sx={{ mb: 2 }}></Box>
      <HeadingPrimary
        headingText={
          "Nasz związek zawodowy został skutecznie powołany w zakładzie Auchan Polska. Żaden pracodawca nie ma prawa zabraniać zrzeszania się w nim."
        }
      />

      <Typography
        variant="fs_12_sb"
        component="p"
        color="info.dark"
        sx={{ mt: rwd(3.9, 2) }}
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
