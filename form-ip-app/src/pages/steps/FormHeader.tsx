import Typography from "@mui/material/Typography";

const FormHeader = () => {
  return (
    <>
      <Typography variant="h1" sx={{ p: 1, fontWeight: "bold" }}>
        Deklaracja Przystąpienia Do OZZIP Amazon
      </Typography>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        Wypełnij deklarację w 4 krokach
      </Typography>

      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        DEKLARACJA <br />
        Ja, niżej wskazany/wskazana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </>
  );
};

export default FormHeader;
