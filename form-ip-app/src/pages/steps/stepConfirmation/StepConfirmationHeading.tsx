import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const StepConfirmationHeading = () => {
  const [counterIncrease, setCounterIncrease] = useState(0);
  const [counterDecrease, setCounterDecrease] = useState(360);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterIncrease < 360) {
        setCounterIncrease(prev => prev + 5);
      }
    }, 10);

    return () => {
      clearInterval(intervalID);
    };
  }, [counterIncrease]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterDecrease > 0) {
        setCounterDecrease(prev => prev - 3);
      }
    }, 15);

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
      <Typography variant="h1" color="info.dark" component="p">
        Deklaracja została złożona
      </Typography>
      <Box
        sx={{
          width: "45px",
          height: "45px",
          mx: { xs: "auto", sm: "0" },
          ml: { sm: 2 },
          mt: { xs: 3, sm: "0" },
          borderRadius: "100%",
          display: "grid",
          placeItems: "center",
          backgroundImage: `conic-gradient(#3e3e3e 0deg, #3e3e3e ${counterIncrease}deg, transparent 0deg)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "90%",
            borderRadius: "100%",
            backgroundColor: "themeWhite",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "38%",
              height: "65%",
              position: "absolute",
              top: "11%",
              left: "29%",
              transform: "rotate(40deg)",
              display: "grid",
              placeItems: "center",
              backgroundImage: `conic-gradient(at 40% 30%,transparent 0deg, transparent ${counterDecrease}deg, #3e3e3e 0deg)`,
            }}
          >
            <Box
              sx={{
                width: "107%",
                height: "104%",
              }}
            >
              <Box
                sx={{
                  width: "13px",
                  height: "24px",
                  backgroundColor: "themeWhite",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepConfirmationHeading;
