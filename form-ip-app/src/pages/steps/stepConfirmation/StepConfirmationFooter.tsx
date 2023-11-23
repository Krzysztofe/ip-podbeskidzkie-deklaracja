import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImgLogoIp from "../../../images/ImgLogoIp";
import { rwd } from "../../../utils/rwd";
import { Link } from "react-router-dom";
import React from "react";
import { useTheme, Theme } from "@mui/system";

enum TypographyVariant {
  FS16RG = "fs_16_rg",
  FS16SB = "fs_16_sb",
}

const createTypographyProps = (
  variant: TypographyVariant,
  fontWeight: number
) => ({
  color: "info.dark",
  component: "p",
  variant,
  style: { fontWeight },
});

const linkStyle = (theme: Theme) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
});

const footerTexts = (theme: Theme) => [
  <Typography {...createTypographyProps(TypographyVariant.FS16SB, 600)}>
    KONTAKT:
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16RG, 400)}>
    tel. 736-850-536
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16RG, 400)}>
    ipamazon@wp.pl
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16SB, 600)}>
    WWW:
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16RG, 400)}>
    <Link to="https://ozzip.pl/" style={linkStyle(theme)} target="_blank">
      www.ozzip.pl
    </Link>
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16SB, 600)}>
    FACEBOOK:
  </Typography>,
  <Typography {...createTypographyProps(TypographyVariant.FS16RG, 400)}>
    <Link
      to="https://facebook.com/IPAmazon"
      style={linkStyle(theme)}
      target="_blank"
    >
      OZZ Inicjatywa Pracownicza Amazon
    </Link>
  </Typography>,
];

const StepConfirmationFooter = () => {
  const theme = useTheme();

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
        {footerTexts(theme).map((paragraph, idx) => {
          return <React.Fragment key={idx}>{paragraph}</React.Fragment>;
        })}
      </Box>
      <ImgLogoIp />
    </Box>
  );
};

export default StepConfirmationFooter;
