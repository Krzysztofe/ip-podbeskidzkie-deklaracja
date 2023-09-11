import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const StepConfirmationParagraphs = () => {
 const theme = useTheme();

  const StyledParagraph = styled(Typography)(({ theme }) => ({
    // color: theme.palette.info.dark,
    // fontSize: theme.typography.h1,
    variant: theme.typography.fs_16_rg.variant,
    color: "info.dark",
    component: "p",
  }));

  const typographyProps = {
    variant: theme.typography.fs_16_rg.variant,
    color: "info.dark",
    component: "p",
  };

  return (
    <article>
      <Typography {...typographyProps} sx={{ marginBlock: { xs: 3 } }}>
        Jeżeli nasza Komisja nie postanowi inaczej, datą przyjęcia Ciebie do
        związku będzie:
      </Typography>
      <Typography {...typographyProps}>
        <strong> 1) </strong> ostatni dzień miesiąca, w którym oświadczenie to
        zostało doręczone:
      </Typography>
      <Typography {...typographyProps} sx={{ ml: 3, marginBlock: 1.6 }}>
        <strong>a)</strong> członkowi prezydium organizacji podstawowej Związku
        (również poprzez odebranie ze skrzynki pocztowej na tablicy związkowej)
        <br />
        <strong>b)</strong> bezpośrednio osobie działającej z upoważnienia
        prezydium Komisji <br />
        <strong>c)</strong> na ujawniony w KRS adres Związku (aktualnie: ul.
        Kościelna 4/1a, 60-538 Poznań)
        <br />
      </Typography>
      <Typography {...typographyProps}>
        <strong>2)</strong> dzień, w którym po otrzymaniu tego oświadczenia
        prezydium Komisji podjęło się Twojej obrony wobec podmiotu
        zatrudniającego (w tym pracodawcy).
      </Typography>
    </article>
  );
};

export default StepConfirmationParagraphs;
