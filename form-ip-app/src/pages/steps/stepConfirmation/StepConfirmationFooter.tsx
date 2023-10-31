import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImgLogoIp from "../../../images/ImgLogoIp";
import { rwd } from "../../../utils/rwd";

enum TypographyVariant {
  FS16RG = "fs_16_rg",
  FS16SB = "fs_16_sb",
}

const StepConfirmationFooter = () => {
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
        flexDirection: rwd("column-reverse", "row"),
      }}
    >
      <Box
        sx={{
          py: rwd(6.6, 6),
          mr: rwd("auto", 4),
        }}
      >
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
      <Box sx={{ mt: rwd(6.6, 0) }}>
        <ImgLogoIp />
      </Box>
    </Box>
  );
};

export default StepConfirmationFooter;
