import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import StepConfirmationBanksList from "./StepConfirmationBanksList";
import InputsHeading from "../stepForm/inputsPrintElements/InputsHeading";
import StepConfirmationFooter from "./StepConfirmationFooter";

const StepConfirmation = () => {
  return (
    <Box>
      <InputsHeading headingText={"Deklaracja została złożona"} />

      <Typography variant="subtitle1" color="info.dark" sx={{}}>
        INFORMACJA O DACIE PRZYJĘCIA DO ZWIĄZKU
      </Typography>

      <Typography variant="subtitle2" color="info.main" sx={{}}>
        Jeżeli nasza Komisja nie postanowi inaczej, datą przyjęcia Ciebie do
        związku będzie:
      </Typography>

      <Typography variant="subtitle2" color="info.main" sx={{ marginBlock: 2 }}>
        <strong> 1) </strong> ostatni dzień miesiąca, w którym oświadczenie to
        zostało doręczone: <br />
      </Typography>
      <Typography variant="subtitle2" color="info.main" sx={{ ml: 3 }}>
        <strong>a)</strong> członkowi prezydium organizacji podstawowej Związku
        (również poprzed odebranie ze skrzynki pocztowej na tablicy związkowej)
        <br />
        <strong>b)</strong>
        bezpośrednio osobie działającej z upoważnienia prezydium Komisji <br />
        <strong>c)</strong> na ujawniony w KRS adres Związku (aktualnie: ul.
        Kościelna 4/1a, 60-538 Poznań)
        <br />
      </Typography>
      <Typography variant="subtitle2" color="info.main" sx={{ marginBlock: 2 }}>
        <strong>2)</strong> dzień, w którym po otrzymaniu tego oświadczenia
        prezydium Komisji podjęło się Twojej obrony wobec podmiotu
        zatrudniającego (w tym pracodawcy). <br />
      </Typography>
      <Typography variant="h6" color="info.main">
        Powyższe wynika z Uchwały nr 10 Krajowego Zjazdu Dlegatów i Dlelegatek
        OZZIP z 12.03.2022 r
      </Typography>
      <Typography variant="subtitle1" color="info.dark" sx={{ marginBlock: 2 }}>
        DROGĄ E-MAIL otrzymasz POTWIERDZENIE ZAPISANIA DO ZWIĄZKU ORAZ DODANIA
        DO LISTY DYSKUSYJNEJ.
      </Typography>

      <InputsHeading
        headingText={
          "Przystąpienie do komisji zostanie zweryfikowane po wykonaniu przelewu bankowego pierwszej składki członkowskiej na konto:"
        }
      />
      <InputsHeading
        headingText={
          "28 2130 0004 2001 0577 6570 0014 <br> OZZ Inicjatywa Pracownicza ul. Kościelna 4, 60-538 Poznań."
        }
      />
      <InputsHeading
        headingText={
          "Tytuł przelweu: (imię i nazwisko), składka za (miesiąc/kwartał)."
        }
      />

      <StepConfirmationBanksList />
      <StepConfirmationFooter />
    </Box>
  );
};

export default StepConfirmation;
