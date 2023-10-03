import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { currentDateInNumbers } from "../../../utils/currentDateInNumbers";

const StepSummarySubmitDate = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "flex" } }}>
      <Typography
        variant="fs_16_sb"
        component="p"
        color="info.dark"
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        Data złożenia deklaracji członkowskiej:&nbsp;&nbsp;&nbsp;
      </Typography>
      <Typography
        variant="fs_16_rg"
        component="p"
        color="info.dark"
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {currentDateInNumbers()}
      </Typography>
    </Box>
  );
};

export default StepSummarySubmitDate;
