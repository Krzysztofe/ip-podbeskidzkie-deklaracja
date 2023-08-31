import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  steps: JSX.Element[];
  currentStepIdx: number;
}

const StepsHeader = (props: Props) => {

  const dataSteps = ["Formulaż", "Klauzula", "Podsumowanie", "Potwierdzenie"];

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "360px", md: "100%" },
        display: "flex",
        mt: { xs: 3, sm: 6 },
        mb: { xs: 6, sm: 10 },
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {dataSteps.map((text, idx, arr) => {
        return (
          <Box
            key={text}
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "48%", md: "auto" },
            }}
          >
            <Box
              sx={{
                width: { xs: "1.25rem", sm: "2rem" },
                aspectRatio: "1/1",
                border: 1,
                borderRadius: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor:
                  props.currentStepIdx >= idx ? "primary.main" : "transparent",
                color: props.currentStepIdx >= idx ? "white" : "info.main",
              }}
            >
              <Typography variant="fs_14_sb" color="info">
                {idx + 1}
              </Typography>
            </Box>
            <Typography
              variant="fs_12_sb"
              color="info.dark"
              sx={{
                marginInline: 1,
              }}
            >
              {text}
            </Typography>
            {idx < arr.length - 1 && (
              <ArrowForwardIosIcon
                color="secondary"
                sx={{
                  marginRight: { sm: "1rem" },
                  marginLeft: { xs: "0", sm: "auto" },
                  fontSize: { xs: "0.8rem", sm: "small" },
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default StepsHeader;
