import Box from "@mui/material/Box";
import { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { StepsContext } from "../../../context/ContextProv";

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
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          transform: "scale(0.79)",
          mr: { xs: 0, md: -1.6 },
        }}
      >
        <ReCAPTCHA sitekey={key} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Captcha;
