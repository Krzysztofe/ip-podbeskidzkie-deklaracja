import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StepSummaryCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

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
        {day}.&nbsp;{month}.&nbsp;{year}
      </Typography>
    </Box>
  );
};

export default StepSummaryCurrentDate;
