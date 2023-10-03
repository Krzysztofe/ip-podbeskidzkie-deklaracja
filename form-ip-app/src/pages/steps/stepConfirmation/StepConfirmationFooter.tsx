import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImgLogoIp from "../../../images/ImgLogoIp";

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      <Box sx={{ py: { xs: 6.6, sm: 6 }, mr: { xs: "auto", sm: 4 } }}>
        {[
          "KONTAKT",
          "tel. 736-850-536 <br />ipamazon@wp.pl <br />www.ozzip.pl",
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
      <Box sx={{ mt: { xs: 6.6, sm: 0 } }}>
        <ImgLogoIp />
      </Box>
    </Box>
  );
};

export default StepConfirmationFooter;
