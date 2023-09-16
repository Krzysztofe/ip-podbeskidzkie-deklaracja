import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const StepSummaryMembership = () => {
  const { formik } = useContext(StepsContext);

  const formikValue = Object.values(formik.values).slice(-1);

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
        Przynależność do związków zawodowych:&nbsp; &nbsp;&nbsp;
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
        {formikValue}
      </Typography>
    </Box>
  );
};

export default StepSummaryMembership;
