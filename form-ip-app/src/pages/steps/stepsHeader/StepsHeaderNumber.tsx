import React from "react";
import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import { StepsContext } from "../../../context/ContextProv";
import Typography from "@mui/material/Typography";

interface Props {
  idx: number;
}

const StepsHeaderNumber = (props: Props) => {
  const { currentStepIdx } = useContext(StepsContext);
  return (
    <>
      <Box
        sx={{
          width: { xs: "1.25rem", sm: "2rem" },
          aspectRatio: "1/1",
          border: 1,
          borderRadius: "100%",
          display: "grid",
          placeItems: "center",
          backgroundColor:
            currentStepIdx >= props.idx ? "primary.main" : "transparent",
          color: currentStepIdx >= props.idx ? "white" : "info.main",
        }}
      >
        <Typography variant="fs_14_sb" color="info">
          {props.idx + 1}
        </Typography>
      </Box>
    </>
  );
};

export default StepsHeaderNumber;
