import { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StepsContext } from "../../../context/ContextProv";
import Box from "@mui/material/Box";

const Captcha = () => {
  const { setIsCaptcha } = useContext(StepsContext);

  const key = process.env.REACT_APP_reCaptchaKey;

  const handleChange = () => {
    setIsCaptcha(true);
  };

  if (!key) {
    return <div>CAPTCHA nie istnieje.</div>;
  }

  var RecaptchaOptions = {
    theme: "white",
    tabindex: 2,
  };

  return (
    <Box
      sx={{
        width: "fit-content",
        transform: "scale(0.79)",
        marginInline: { xs: "auto", sm: "0" },
        marginLeft: { sm: "auto" },
        marginRight: { sm: "-30px" },
        display:"flex",
        marginTop: "auto"
      }}
    >
      <ReCAPTCHA sitekey={key} onChange={handleChange} />
    </Box>
  );
};

export default Captcha;
