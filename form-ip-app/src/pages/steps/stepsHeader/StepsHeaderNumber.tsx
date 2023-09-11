import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

type Props = {
  idx: number;
}

const StepsHeaderNumber = (props: Props) => {
  const { currentStepIdx } = useContext(StepsContext);
  return (
    <>
      <Box
        sx={{
          width: { xs: "20px", sm: "30px" },
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
