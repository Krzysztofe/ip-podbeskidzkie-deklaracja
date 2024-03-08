import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import { rwd } from "../../../utils/rwd";
import { ModelMember } from "../../../sharedModels/ModelMember";
import StepBorderline from "./StepBorderline";

const StepSummaryMembership = () => {
  const { values } = useFormikContext<ModelMember>();

  return (
    <>
      <Box
        sx={{
          display: rwd("block", "block", "flex"),
          mb: 1,
        }}
      >
        <Typography
          variant="fs_16_sb"
          component="p"
          color="info.dark"
          sx={{
            width: rwd("100%", "100%", "50%"),
            textAlign: rwd("center", "center", "right"),
          }}
        >
          Przynależność do związków zawodowych:&nbsp; &nbsp;&nbsp;
        </Typography>
        <Typography
          variant="fs_16_rg"
          component="p"
          color="info.dark"
          sx={{
            width: rwd("100%", "100%", "50%"),
            textAlign: rwd("center", "center", "left"),
          }}
        >
          {values.membership}
        </Typography>
      </Box>
      <StepBorderline />
    </>
  );
};

export default StepSummaryMembership;
