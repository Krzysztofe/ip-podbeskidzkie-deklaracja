import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const StepConfirmationAnimation = () => {
  const [counterIncrease, setCounterIncrease] = useState(0);

  const [counterDecrease, setCounterDecrease] = useState(360);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterIncrease < 360) {
        setCounterIncrease(prev => prev + 20);
      }
    }, 1);

    return () => {
      clearInterval(intervalID);
    };
  }, [counterIncrease]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterDecrease > 0) {
        setCounterDecrease(prev => prev - 10);
      }
    }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, [counterDecrease]);

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { sm: "center" },
      }}
    >
      <Typography variant="h1" color="info.dark" component="p" sx={{}}>
        Deklaracja została złożona
      </Typography>
      <Box
        sx={{
          width: "75px",
          height: "75px",
          mx: { xs: "auto", sm: "0" },
          ml: { sm: 2 },
          mt: { xs: 3, sm: "0" },
          borderRadius: "100%",
          display: "grid",
          placeItems: "center",
          backgroundImage: `conic-gradient(#e2e2e2 0deg, #e2e2e2 ${counterIncrease}deg, transparent 0deg)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            borderRadius: "100%",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "42%",
              height: "65%",
              position: "absolute",
              top: "10%",
              left: "27%",
              transform: "rotate(40deg)",
              display: "grid",
              placeItems: "center",
              backgroundImage: `conic-gradient(at 40% 30%,transparent 0deg, transparent ${counterDecrease}deg, #e2e2e2 0deg)`,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{ width: "80%", height: "90%", backgroundColor: "white" }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepConfirmationAnimation;
