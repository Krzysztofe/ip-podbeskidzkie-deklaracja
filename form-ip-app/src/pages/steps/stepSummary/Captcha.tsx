import Box from "@mui/material/Box";
import ReCAPTCHA from "react-google-recaptcha";
import { rwd } from "../../../utils/rwd";
import { useCaptchaStore } from "../../../zustandStores/useCaptchaStore";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";

const Captcha = () => {
  const setCaptcha = useCaptchaStore(state => state.setCaptcha);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const key = process.env.REACT_APP_reCaptchaKey;

  const handleChange = () => {
    setCaptcha(true);
  };

  if (currentStepIdx !== 2) return null;
  
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
        bottom: rwd("120px", "90px"),
        display: "flex",
        justifyContent: rwd("center", "end"),
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          transform: "scale(0.79)",
          mr: rwd(0, 0, -1.6),
        }}
      >
        <ReCAPTCHA sitekey={key} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default Captcha;
