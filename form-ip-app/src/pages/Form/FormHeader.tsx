import React from "react";
import Typography from "@mui/material/Typography";

const FormHeader = () => {
  return (
    <>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        Deklaracja przystąpienia do <br /> Ogólnopolskiego <br /> Związku
        Zawodowego „Inicjatywa Pracownicza”
      </Typography>

      <Typography variant="body2" sx={{ p: 1, fontWeight: "bold" }}>
        DEKLARACJA <br />
        Ja, niżej podpisany/podpisana oświadczam, iż przystępuję do
        Ogólnopolskiego Związku Zawodowego „Inicjatywa Pracownicza” z siedzibą w
        Poznaniu (KRS nr 0000215247).
      </Typography>
    </>
  );
};

export default FormHeader;
