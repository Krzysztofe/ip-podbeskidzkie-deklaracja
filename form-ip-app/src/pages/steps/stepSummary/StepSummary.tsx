import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import HttpRequestState from "./HttpRequestState";
import { v4 as UUID } from "uuid";
import Captcha from "./Captcha";
import InputsHeading from "../stepForm/inputsPrintElements/InputsHeading";

const StepSummary = () => {
  const { formik } = useContext(StepsContext);

  // const formikValues = Object.values(formik.values);

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
    "Przynależność do ziwązków zawodowych",
  ];

  const formikValues = [
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
    "Przynależność do ziwązków zawodowych",
  ];

  return (
    <>
      <HttpRequestState />

      <Box sx={{ width: "100%", pb: 10 }}>
        <InputsHeading headingText={"Podsumowanie"} />
        {dataSummary.map((text, idx) => {
          return (
            <div key={UUID()}>
              {formikValues[idx] === "" ? null : (
                <Box
                  sx={{
                    display: `${
                      idx === formikValues.length - 1 ? "block" : "flex"
                    }`,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="info.main"
                    sx={{
                      width: `${
                        idx === formikValues.length - 1 ? "100%" : "50%"
                      }`,
                      textAlign: `${
                        idx === formikValues.length - 1 ? "center" : "right"
                      }`,
                    }}
                  >
                    {text}:&nbsp; &nbsp;&nbsp;
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="info.main"
                    sx={{
                      maxWidth: 300,
                      marginInline: `${
                        idx === formikValues.length - 1 ? "auto" : ""
                      }`,
                      textAlign: `${
                        idx === formikValues.length - 1 ? "center" : "left"
                      }`,
                    }}
                  >
                    {formikValues[idx]}
                  </Typography>
                </Box>
              )}
            </div>
          );
        })}
        <Typography
          variant="body1"
          color="info.main"
          sx={{
            textAlign: "center",
            mt: 1,
            maxWidth: 300,
            marginInline: "auto",
          }}
        >
          Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetważanie
          moich danych osobowych na zasadach i w celach w niej wskazanych.
        </Typography>
      </Box>
      <Captcha />
    </>
  );
};

export default StepSummary;
