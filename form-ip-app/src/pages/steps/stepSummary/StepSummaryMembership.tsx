import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { StepsContext } from "../../../context/ContextProv";

const StepSummaryMembership = () => {
  const { formik } = useContext(StepsContext);

  const formikValue = Object.values(formik.values).slice(-2, -1);

  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        mb: 2,
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "-10px",
          right: "50%",
          left: "50%",
          transform: "translate(-50%)",
          width: "40%",
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
