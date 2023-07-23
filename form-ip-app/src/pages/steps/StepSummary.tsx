import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";
import { getValue } from "@testing-library/user-event/dist/utils";
const StepSummary = () => {
  const { formik } = useContext(StepsContext);

  const formikValues = Object.values(formik.values);

  const dataSummary = [
    "Imię",
    "Nazwisko",
    "Adres",
    "Telefon",
    "E-mail",
    "Pracodawca",
    "Pracodawca",
    "Miejsce Pracy",
    "Miejsce Pracy",
    "Umowa",
    "Wymiar czasu pracy",
    "Dział",
    "Login",
    "Przynależność do innych ziwązków",
  ];

  return (
    <Box>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        Podsumowanie
      </Typography>

      {dataSummary.map((text, idx) => {
        return (
          <>
            {formikValues[idx] === "" ? null : (
              <Typography variant="body1" sx={{ p: 1 }}>
                <span key={text}>
                  <strong>{text}: </strong>
                  {formikValues[idx]}
                </span>
              </Typography>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default StepSummary;
