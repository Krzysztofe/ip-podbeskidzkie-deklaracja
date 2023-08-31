import { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StepsContext } from "../../../context/ContextProv";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Captcha = () => {
  const { setIsCaptcha } = useContext(StepsContext);

  const key = process.env.REACT_APP_reCaptchaKey;

  const handleChange = () => {
    setIsCaptcha(true);
  };

  if (!key) {
    return <div>CAPTCHA nie istnieje.</div>;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        left: 0,
        bottom: { xs: "6.4rem", sm: "4.4rem" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "end" },
        }}
      >
        <Box
          sx={{
            width: { xs: "425px", sm: "16px" },
            transform: "scale(0.79)",
            display: "flex",
            justifyContent: { xs: "center", sm: "end" },
          }}
        >
          <ReCAPTCHA sitekey={key} onChange={handleChange} />
        </Box>
      </Container>
    </Box>
  );
};

export default Captcha;
