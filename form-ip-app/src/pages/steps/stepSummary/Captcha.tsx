import { useContext, useState } from "react";
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
    <>
      <ReCAPTCHA sitekey={key} onChange={handleChange} />
    </>
  );
};

export default Captcha;
