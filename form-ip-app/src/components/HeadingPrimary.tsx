import { Typography } from "@mui/material";

interface Props {
  headingText: string;
  color?: string
}

const HeadingPrimary = (props: Props) => {


  return (
    <Typography
      variant="fs_16_sb"
      color={props.color ? props.color : "primary"}
      component="p"
      dangerouslySetInnerHTML={{ __html: props.headingText }}
    />
  );
};

export default HeadingPrimary;
