import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { useTheme } from "@mui/material/styles";

interface Props {
  steps: JSX.Element[];
  currentStepIdx: number;
}

const StepsHeader = (props: Props) => {
  const theme = useTheme();
  const { windowWidth } = useWindowWidth();

  const dataSteps = ["Formulaż", "Klauzula", "Wyślij", "Potwierdzenie"];

  return (
    <Stack direction="row" sx={{ maxWidth: 400, height: "100%", display: "flex", alignItems: "center", marginInline: "auto" }}>
      {dataSteps.map((text, idx) => {
        return (
          <Box sx={{ width: "30%" }}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.info.main}`,
                width: "1.3rem",
                aspectRatio: "1/1",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                marginInline: "auto",
                backgroundColor:
                  props.currentStepIdx >= idx ? "primary.main" : "transparent",
                color: props.currentStepIdx >= idx ? "white" : "info.main",
              }}
            >
              <Typography color="info">{idx + 1}</Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: windowWidth < 385 ? "100" : "600",
                textAlign: "center",
              }}
            >
              {text}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};

export default StepsHeader;
