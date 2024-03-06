import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFormikContext } from "formik";
import { rwd } from "../../../utils/rwd";
import { ModelMember } from "../stepForm/stepFormFormik/dataStepFormik";

const StepSummaryMembership = () => {
  const { values } = useFormikContext<ModelMember>();

  return (
    <Box
      sx={{
        display: rwd("block", "block", "flex"),
        mb: 2,
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "-10px",
          right: "50%",
          left: "50%",
          transform: "translate(-50%)",
          width: "30%",
          height: "1px",
          backgroundColor: "info.main",
        },
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
  );
};

export default StepSummaryMembership;
