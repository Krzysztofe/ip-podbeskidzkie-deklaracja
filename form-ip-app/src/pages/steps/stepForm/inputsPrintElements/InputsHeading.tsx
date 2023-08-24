import { Typography } from "@mui/material";

interface Props{
    headingText: string
}

const InputsHeading = (props:Props) => {
  return (
    <Typography variant="subtitle1" color="primary" mb={3}>
     {props.headingText}
    </Typography>
  );
};

export default InputsHeading;
