import React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  steps: JSX.Element[];
  currentStepIdx: number;
}

const StepsHeader = (props: Props) => {
  return (
    <header className="wrapper wrapper--formReactionHeader ">
      <Typography>
        Krok {props.currentStepIdx + 1}/{props.steps.length}
      </Typography>
     
    </header>
  );
};

export default StepsHeader;
