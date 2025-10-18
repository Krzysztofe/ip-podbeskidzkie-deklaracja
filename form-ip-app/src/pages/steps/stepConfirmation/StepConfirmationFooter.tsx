import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { rwd } from "../../../utils/rwd";
import logoIP from "../../../images/logoIP.webp";

enum TypographyVariant {
  FS16RG = "fs_16_rg",
  FS16SB = "fs_16_sb",
}

const createTypographyProps = (variant: TypographyVariant) => ({
  color: "info.dark",
  component: "p",
  variant,
});

const texts = [
  { variant: TypographyVariant.FS16SB, text: "KONTAKT:" },
  {
    variant: TypographyVariant.FS16RG,
    text: "Electropoli tel. 508 110 328 Madzia Magdalena",
  },
  {
    variant: TypographyVariant.FS16RG,
    text: "Eltek tel. 661 667 567 Agnieszka Struska",
  },
  {
    variant: TypographyVariant.FS16RG,
    text: "Eltek tel. 501 465 521 Magdalena Dworaczek",
  },
  {
    variant: TypographyVariant.FS16RG,
    text: "e-mail: ozzippodbeskidzie@gmail.com",
  },
  { variant: TypographyVariant.FS16SB, text: "WWW:" },

  {
    variant: TypographyVariant.FS16RG,
    text: "www.ozzip.pl",
    link: "https://ozzip.pl/",
  },
  { variant: TypographyVariant.FS16SB, text: "FACEBOOK:" },
  {
    variant: TypographyVariant.FS16RG,
    text: "Komisja Międzyzakładowa OZZ Inicjatywa Pracownicza Pdbeskidzie",
    link: "https://www.facebook.com/profile.php?id=61577058778735",
  },
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
        {texts.map(({ variant, text, link }) => (
          <Typography key={text} {...createTypographyProps(variant)}>
            {link ? (
              <Link
                to={link}
                style={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                }}
                target="_blank"
              >
                {text}
              </Link>
            ) : (
              text
            )}
          </Typography>
        ))}
      </Box>
      <Box
        component="img"
        src={logoIP}
        alt="Logo OZZIP"
        sx={{
          width: rwd("5rem", "8rem"),
          height: rwd("5rem", "8rem"),
        }}
      />
    </Box>
  );
};

export default StepConfirmationFooter;
