import Box from "@mui/material/Box";
import HeadingPrimary from "../../../components/HeadingPrimary";

type Props = {
  texts: string[];
  color?: string;
};

const StepConfirnationHeadings = (props: Props) => {
  return (
    <>
      {props.texts.map(text => {
        return (
          <Box sx={{ mb: 2 }}>
            <HeadingPrimary key={text} headingText={text} color={props.color} />
          </Box>
        );
      })}
    </>
  );
};

export default StepConfirnationHeadings;
