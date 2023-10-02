import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { v4 as UUID } from "uuid";
import HeadingPrimary from "../../../components/HeadingPrimary";
import { StepsContext } from "../../../context/ContextProv";
import StepSummaryClauseConfirmation from "./StepSummaryClauseConfirmation";
import StepSummaryMembership from "./StepSummaryMembership";
import StepSummaryCurrentDate from "./StepSummaryCurrentDate";

const StepSummary = () => {
  const { formik } = useContext(StepsContext);

  const formikValues = Object.values(formik.values).slice(0, -1);

  const dataSummary = [
    "Imię",
    "Nazwisko",
    "Miasto",
    "Ulica",
    "Nr mieszkania",
    "Kod",
    "Telefon",
    "E-mail",
    "Login",
    "Pracodawca",
    "Pracodawca",
    "Miejsce Pracy",
    "Miejsce Pracy",
    "Umowa",
    "Czas pracy",
    "Czas pracy",
    "Dział",
  ];

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: { xs: 4.1, sm: 5.1 }, mt: { xs: 2.5, sm: 3.9 } }}>
          <HeadingPrimary headingText={"Sprawdź  dane z formularza"} />
        </Box>

        {dataSummary.map((text, idx) => {
          return (
            <Box key={UUID()}>
              {formikValues[idx] === "" ? null : (
                <Box
                  sx={{
                    display: "flex",
                    mb: idx === 8 ? 2 : 0,
                    position: "relative",
                    "&::after":
                      idx === 8
                        ? {
                            content: "''",
                            position: "absolute",
                            bottom: "-10px",
                            right: "50%",
                            left: "50%",
                            transform: "translate(-50%)",
                            width: "40%",
                            height: "1px",
                            backgroundColor: "info.main",
                          }
                        : {},
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
        <StepSummaryCurrentDate />
        <StepSummaryClauseConfirmation />
      </Box>
    </Box>
  );
};

export default StepSummary;
