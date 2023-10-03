import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";
import StepConfirmationBanksList from "./StepConfirmationBanksList";
import StepConfirmationFooter from "./StepConfirmationFooter";
import StepConfirmationParagraphs from "./StepConfirmationParagraphs";

const StepConfirmation = () => {
  const HeadingPrimaryTexts = [
    "Przystąpienie do komisji zostanie zweryfikowane po wykonaniu przelewu bankowego pierwszej składki członkowskiej na konto:",
    "28 2130 0004 2001 0577 6570 0014 <br> OZZ Inicjatywa Pracownicza ul. Kościelna 4, 60-538 Poznań.",
    "Tytuł przelweu: (imię i nazwisko), składka za (miesiąc/kwartał).",
  ];

  return (
    <Box sx={{ px: 1.6, pt: 4 }}>
      <Typography variant="h1" color="info.dark" component="p" sx={{ mb: 3 }}>
        Deklaracja została złożona
      </Typography>

      {HeadingPrimaryTexts.map(text => {
        return (
          <Box key={text} sx={{ mb: 2 }}>
            <HeadingPrimary headingText={text} />
          </Box>
        );
      })}

      <StepConfirmationBanksList />

      <Box sx={{ mt: 3 }}>
        <HeadingPrimary
          headingText={"INFORMACJA O DACIE PRZYJĘCIA DO ZWIĄZKU"}
          color={"info.dark"}
        />
      </Box>

      <StepConfirmationParagraphs />
      <Typography
        variant="fs_12_rg"
        color="info.dark"
        component="p"
        sx={{ my: { xs: 3 } }}
      >
        Powyższe wynika z Uchwały nr 10 Krajowego Zjazdu Dlegatów i Dlelegatek
        OZZIP z 12.03.2022 r
      </Typography>
      <HeadingPrimary
        headingText={
          "DROGĄ E-MAIL OTRZYMASZ POTWIERDZENIE ZAPISANIA DO ZWIĄZKU ORAZ DODANIA DO LISTY DYSKUSYJNEJ"
        }
        color={"info.dark"}
      />

      <StepConfirmationFooter />
    </Box>
  );
};

export default StepConfirmation;
