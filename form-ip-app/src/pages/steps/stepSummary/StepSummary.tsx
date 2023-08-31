import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";
import HttpRequestState from "./HttpRequestState";
import { v4 as UUID } from "uuid";
import Captcha from "./Captcha";
import HeadingPrimary from "../../../components/HeadingPrimary";
const imgMobile = require("./../../../images/Rakieta_mobile.svg")

const StepSummary = () => {
  const { formik } = useContext(StepsContext);

  const formikValues = Object.values(formik.values).slice(0, -1);

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
  ];

  // const formikValues = [
  //   "Imię",
  //   "Nazwisko",
  //   "Adres",
  //   "Telefon",
  //   "E-mail",
  //   "Pracodawca",
  //   "Pracodawca",
  //   "Miejsce Pracy",
  //   "Miejsce Pracy",
  //   "Umowa",
  //   "Wymiar czasu pracy",
  //   "Dział",
  //   "Login",
  //   "Przynależność do związków zawodowych",
  // ];

  return (
    <>
      <HttpRequestState />

      <Box sx={{ width: "100%", mb: 10 }}>
        <Box sx={{ mb: 6.25 }}>
          <HeadingPrimary headingText={"Podsumowanie"} />
        </Box>

       

        {dataSummary.map((text, idx) => {
          return (
            <Box
            key={UUID()}
            >
              {formikValues[idx] === "" ? null : (
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="fs_16_sb"
                    component="p"
                    color="info.dark"
                    sx={{
                      width: "50%",
                      textAlign: "right",
                    }}
                  >
                    {text}:&nbsp; &nbsp;&nbsp;
                  </Typography>
                  <Typography
                    variant="fs_16_rg"
                    component="p"
                    color="info.dark"
                    sx={{
                      width: "50%",
                      textAlign: "left",
                    }}
                  >
                    {formikValues[idx]}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}

        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Typography
            variant="fs_16_sb"
            component="p"
            color="info.dark"
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "right" },
            }}
          >
            Przynależność do związków zawodowych:&nbsp; &nbsp;&nbsp;
          </Typography>
          <Typography
            variant="fs_16_rg"
            component="p"
            color="info.dark"
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Przynależność do związków zawodowych
          </Typography>
        </Box>

        <Typography
          variant="fs_12_rg"
          component="p"
          color="info.dark"
          sx={{
            textAlign: "center",
            mt: 1,
            maxWidth: 300,
            marginInline: "auto",
            pt: 2,
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
