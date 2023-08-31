import Typography from "@mui/material/Typography";

interface Props{
    text: string
}

const StepsHeaderText = (props:Props) => {
  return (
    <Typography
      variant="fs_12_sb"
      color="info.dark"
      sx={{
        marginInline: 1,
      }}
    >
      {props.text}
    </Typography>
  );
};

export default StepsHeaderText;
