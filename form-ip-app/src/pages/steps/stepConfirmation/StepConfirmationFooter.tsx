import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StepConfirmationFooter = () => {
  return (
    <Box sx={{marginBlock:{xs: 6, sm:10.5}}}>
      <Typography variant="fs_16_sb" color="info.dark" component="p" sx={{}}>
        KONTAKT:
      </Typography>
      <Typography variant="fs_16_rg" color="info.dark" component="p">
        tel. 736-850-536 <br />
        ipamazon@wp.pl <br />
        www.ozzip.p
      </Typography>
      <Typography variant="fs_16_sb" color="info.dark" component="p" sx={{}}>
        Facebook:
      </Typography>
      <Typography variant="fs_16_rg" color="info.dark" component="p">
        OZZ Inicjatywa Pracownicza Amazon
      </Typography>
    </Box>
  );
};

export default StepConfirmationFooter;
