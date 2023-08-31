import Typography from "@mui/material/Typography";

const StepConfirmationParagraphs = () => {
  return (
    <>
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
    </>
  );
};

export default StepConfirmationParagraphs;
