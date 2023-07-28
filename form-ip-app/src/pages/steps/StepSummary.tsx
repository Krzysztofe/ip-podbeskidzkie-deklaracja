import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../context/ContextProv";
import HttpRequestState from "./HttpRequestState";
import { v4 as UUID } from "uuid";

const StepSummary = () => {
  const { formik, isLoading, error } = useContext(StepsContext);

  const formikValues = Object.values(formik.values);

  console.log("values z forma", formik.values);

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
    <>
      <HttpRequestState />
      {isLoading ? (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "101%",
            bgcolor: "white",
            opacity: "0.8",
            zIndex: 1,
          }}
        ></Box>
      ) : null}

      <Box>
        <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
          Podsumowanie
        </Typography>

        {dataSummary.map((text, idx) => {
          return (
            <div key={UUID()}>
              {formikValues[idx] === "" ? null : (
                <Typography variant="body1" sx={{ p: 1 }}>
                  <span>
                    <strong>{text}: </strong>
                    {formikValues[idx]}
                  </span>
                </Typography>
              )}
            </div>
          );
        })}
      </Box>
    </>
  );
};

export default StepSummary;
