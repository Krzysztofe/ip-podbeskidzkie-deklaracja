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
        position: "absolute",
        right: "50%",
        left: "50%",
        transform: "translate(-50%)",
        bottom: { xs: "120px", sm: "90px" },
        display: "flex",
        justifyContent: { xs: "center", sm: "end" },
        width: { xs: "90%", sm: "100%" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          transform: "scale(0.79)",
        }}
      >
        <ReCAPTCHA sitekey={key} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Captcha;
