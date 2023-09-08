import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";
import ImgConfirmation from "../../../images/ImgConfirmation";
import StepConfirmationBanksList from "./StepConfirmationBanksList";
import StepConfirmationFooter from "./StepConfirmationFooter";
import StepConfirmationParagraphs from "./StepConfirmationParagraphs";

const StepConfirmation = () => {
  return (
    <Box>
      <HeadingPrimary headingText={"Deklaracja została złożona"} />

      <Box sx={{ display: "grid", placeItems: "center", marginBlock: 8 }}>
        <ImgConfirmation />
      </Box>

      <HeadingPrimary
        headingText={"INFORMACJA O DACIE PRZYJĘCIA DO ZWIĄZKU"}
        color={"info.dark"}
      />

      <StepConfirmationParagraphs />
      <Typography
        variant="fs_12_rg"
        color="info.dark"
        component="p"
        sx={{ marginBlock: { xs: 3 } }}
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

      <Box sx={{ mt: 5, mb: 10 }}>
        <HeadingPrimary
          headingText={
            "Przystąpienie do komisji zostanie zweryfikowane po wykonaniu przelewu bankowego pierwszej składki członkowskiej na konto:"
          }
        />
        <HeadingPrimary
          headingText={
            "28 2130 0004 2001 0577 6570 0014 <br> OZZ Inicjatywa Pracownicza ul. Kościelna 4, 60-538 Poznań."
          }
        />
        <HeadingPrimary
          headingText={
            "Tytuł przelweu: (imię i nazwisko), składka za (miesiąc/kwartał)."
          }
        />
      </Box>
      <StepConfirmationBanksList />
      <StepConfirmationFooter />
    </Box>
  );
};

export default StepConfirmation;
