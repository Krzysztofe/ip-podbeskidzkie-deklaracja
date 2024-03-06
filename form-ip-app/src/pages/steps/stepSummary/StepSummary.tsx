import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import React from "react";
import { v4 as UUID } from "uuid";
import HeadingPrimary from "../../../components/HeadingPrimary";
import { rwd } from "../../../utils/rwd";
import StepSummaryClauseConfirmation from "./StepSummaryClauseConfirmation";
import StepSummaryMembership from "./StepSummaryMembership";
import StepSummarySubmitDate from "./StepSummarySubmitDate";
import { ModelMember } from "../../../sharedModels/ModelMember";

const dataSummary = [
  "Imię",
  "Nazwisko",
  "Telefon",
  "E-mail",
  "Login",
  "Miejscowość",
  "Ulica",
  "Nr domu",
  "Nr mieszkania",
  "Kod",
  "Pracodawca",
  "Pracodawca",
  "Miejsce Pracy",
  "Miejsce Pracy",
  "Umowa",
  "Czas pracy",
  "Czas pracy",
  "Dział",
];

const StepSummary = () => {
  const { values } = useFormikContext<ModelMember>();

  const formikValues = Object.values(values).slice(0, -1);

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ mb: rwd(4.1, 5.1), mt: rwd(2.5, 3.9) }}>
          <HeadingPrimary headingText={"Sprawdź przekazane dane"} />
        </Box>

        {dataSummary.map((text, idx) => {
          return (
            <React.Fragment key={UUID()}>
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
                    {formikValues[idx] as string}
                  </Typography>
                </Box>
              )}
              {idx === 4 || idx === 9 ? (
                <Box
                  sx={{
                    backgroundColor: "info.main",
                    height: "1px",
                    marginBlock: 1,
                    width: "30%",
                    marginInline: "auto",
                  }}
                ></Box>
              ) : (
                <></>
              )}
            </React.Fragment>
          );
        })}

        <StepSummaryMembership />
        <StepSummarySubmitDate />
        <StepSummaryClauseConfirmation />
      </Box>
    </Box>
  );
};

export default StepSummary;
