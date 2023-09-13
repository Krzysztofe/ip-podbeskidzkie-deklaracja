import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { v4 as UUID } from "uuid";
import HeadingPrimary from "../../../components/HeadingPrimary";
import { StepsContext } from "../../../context/ContextProv";
import HttpRequestState from "./HttpRequestState";
import StepSummaryClauseConfirmation from "./StepSummaryClauseConfirmation";
import StepSummaryMembership from "./StepSummaryMembership";
import Captcha from "./Captcha";

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
    "Czas pracy",
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
        <Box sx={{ mb: { xs: 4.1, sm: 5.1 } }}>
          <HeadingPrimary headingText={"Zweryfikuj przekazane dane"} />
        </Box>

        {dataSummary.map((text, idx) => {
          return (
            <Box key={UUID()}>
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

        <StepSummaryMembership />
        <StepSummaryClauseConfirmation />
      </Box>
      {/* <Captcha /> */}
    </>
  );
};

export default StepSummary;
