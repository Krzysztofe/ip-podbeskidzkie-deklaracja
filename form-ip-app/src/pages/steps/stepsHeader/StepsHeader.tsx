import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import StepsHeaderNumber from "./StepsHeaderNumber";
import StepsHeaderText from "./StepsHeaderText";

const StepsHeader = () => {
  const dataSteps = ["Formulaż", "Klauzula", "Podsumowanie", "Potwierdzenie"];

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "360px", md: "100%" },
        display: "flex",
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
            <StepsHeaderNumber idx={idx} />
            <StepsHeaderText text={text} />

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
