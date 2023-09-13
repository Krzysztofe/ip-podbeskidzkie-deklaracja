import Typography from "@mui/material/Typography";

type Props = {
  text: string;
};

const StepsHeaderText = (props: Props) => {
  return (
    <Typography
      variant="fs_12_sb"
      color="info.dark"
      component="p"
      sx={{
        width: {xs:"100%", md: "fit-content"},
        position: { xs: "absolute", md: "unset" },
        top: { xs: "22px", sm: "32px" },
        left: "-27px",
        textAlign: "center",
        ml: {xs:0, md: 1.3}
      }}
    >
      {props.text}
    </Typography>
  );
};

export default StepsHeaderText;
