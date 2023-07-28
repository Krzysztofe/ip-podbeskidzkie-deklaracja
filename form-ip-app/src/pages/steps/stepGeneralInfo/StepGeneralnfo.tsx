import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { dataGeneralInfoParagraphs } from "./dataStepGeneralInfo";

const StepGeneralnfo = () => {
  return (
    <Card>
      <Typography variant="h1" sx={{ p: 1, fontWeight: "bold" }}>
        DEKLARACJA PRZYSTĄPIENIA DO OZZIP AMAZON
      </Typography>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
      Wypełnij deklarację w 4 krokach
      </Typography>
      <Typography variant="body1" sx={{ p: 1, fontWeight: "bold" }}>
        KLAUZULA INFORMACYNA
      </Typography>
      {dataGeneralInfoParagraphs.map(paragraph => {
        return (
          <Typography key={paragraph} variant="body2" sx={{ p: 0.5 }}>
            {paragraph}
          </Typography>
        );
      })}
    </Card>
  );
};

export default StepGeneralnfo;
