import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StepConfirmationFooter = () => {
  
  enum TypographyVariant {
    FS16RG = "fs_16_rg",
    FS16SB = "fs_16_sb",
  }

  const typographyProps = (idx: number) => {
    return {
      color: "info.dark",
      component: "p",
      variant:
        idx % 2 === 0 ? TypographyVariant.FS16SB : TypographyVariant.FS16RG,
    };
  };


  return (
    <Box sx={{ marginBlock: { xs: 6.6, sm: 8.4 } }}>
      {[
        "KONTAKT",
        "tel. 736-850-536 <br />ipamazon@wp.pl <br />www.ozzip.p",
        "Facebook:",
        "OZZ Inicjatywa Pracownicza Amazon",
      ].map((paragraph, idx) => {
        return (
          <Typography
            key={paragraph}
            {...typographyProps(idx)}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      })}
    </Box>
  );
};

export default StepConfirmationFooter;
