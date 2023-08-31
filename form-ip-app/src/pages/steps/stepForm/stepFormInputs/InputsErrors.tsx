import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Props {
  value: string;
  otherValue?: string | null;
  formik: any;
}

const InputsErrors = (props: Props) => {

// const BoxStyles = styled(Box)({
// height: theme => theme.spacing(2.5) 
// });


  if (props.otherValue) {
    return (
      <Box sx={{ }}>
        {(props.formik.touched[props.value] ||
          props.formik.touched[props.otherValue]) &&
          props.formik.errors[props.value] && (
            <Typography variant="subtitle1" color="error">
              {props.formik.errors[props.value]}
            </Typography>
          )}
      </Box>
    );
  }
  return (
    <Box sx={{ height: theme => theme.spacing(2.5) }}>
      {props.formik.touched[props.value as keyof typeof props.formik.touched] &&
        props.formik.errors[
          props.value as keyof typeof props.formik.errors
        ] && (
          <Typography variant="subtitle1" color="error">
            {
              props.formik.errors[
                props.value as keyof typeof props.formik.errors
              ]
            }
          </Typography>
        )}
    </Box>
  );
};

export default InputsErrors;
