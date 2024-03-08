import Box from "@mui/material/Box";
import { rwd } from "../../utils/rwd";
import useMultistepFormStore from "../../zustandStores/useMultistepFormStore";

type Props = {
  children: React.ReactNode;
};

const StepsInFormWrapper = (props: Props) => {
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);

  const height =
    currentStepIdx === 0
      ? rwd("calc(100% - 120px)", "calc(100% - 90px)")
      : rwd("calc(100% - 120px - 74px)", "calc(100% - 90px - 72px)");

  return (
    <Box
      sx={{
        height,
        display: "grid",
        gridTemplateColumns: "repeat(3, 100%)",
        transform: `translate(-${currentStepIdx}00%)`,
        transition: "transform 0.5s ease",
      }}
    >
      {props.children}
    </Box>
  );
};

export default StepsInFormWrapper;
