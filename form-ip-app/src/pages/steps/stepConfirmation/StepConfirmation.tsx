import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeadingPrimary from "../../../components/HeadingPrimary";
import ImgConfirmation from "../../../images/ImgConfirmation";
import StepConfirmationBanksList from "./StepConfirmationBanksList";
import StepConfirmationFooter from "./StepConfirmationFooter";


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

      <Typography
        variant="fs_16_rg"
        color="info.dark"
        component="p"
        sx={{ marginBlock: { xs: 4 } }}
      >
        Jeżeli nasza Komisja nie postanowi inaczej, datą przyjęcia Ciebie do
        związku będzie:
      </Typography>
      <Typography variant="fs_16_rg" color="info.dark" component="p">
        <strong> 1) </strong> ostatni dzień miesiąca, w którym oświadczenie to
        zostało doręczone: <br />
      </Typography>
      <Typography
        variant="fs_16_rg"
        color="info.dark"
        component="p"
        sx={{ ml: 3, marginBlock: 3 }}
      >
        <strong>a)</strong> członkowi prezydium organizacji podstawowej Związku
        (również poprzed odebranie ze skrzynki pocztowej na tablicy związkowej)
        <br />
        <strong>b)</strong> bezpośrednio osobie działającej z upoważnienia
        prezydium Komisji <br />
        <strong>c)</strong> na ujawniony w KRS adres Związku (aktualnie: ul.
        Kościelna 4/1a, 60-538 Poznań)
        <br />
      </Typography>
      <Typography variant="fs_16_rg" color="info.dark" component="p">
        <strong>2)</strong> dzień, w którym po otrzymaniu tego oświadczenia
        prezydium Komisji podjęło się Twojej obrony wobec podmiotu
        zatrudniającego (w tym pracodawcy). <br />
      </Typography>
      <Typography
        variant="fs_12_rg"
        color="info.dark"
        component="p"
        sx={{ marginBlock: { xs: 4 } }}
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
