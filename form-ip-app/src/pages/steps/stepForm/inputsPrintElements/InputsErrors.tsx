import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  value: string;
  otherValue: string | null;
  formik: any;
}

const InputsErrors = (props: Props) => {
if (props.otherValue === null) {
  return (
    <Box sx={{ height: theme => theme.spacing(3) }}>
      {props.formik.touched[props.value as keyof typeof props.formik.touched] &&
        props.formik.errors[
          props.value as keyof typeof props.formik.errors
        ] && (
          <Typography variant="subtitle2" color="error">
            {
              props.formik.errors[
                props.value as keyof typeof props.formik.errors
              ]
            }
          </Typography>
        )}
    </Box>
  );
}
return (
  <Box sx={{ height: theme => theme.spacing(3) }}>
    {(props.formik.touched[props.value] ||
      props.formik.touched[props.otherValue]) &&
      props.formik.errors[props.value] && (
        <Typography variant="subtitle2" color="error">
          {props.formik.errors[props.value]}
        </Typography>
      )}
  </Box>
);
};

export default InputsErrors;
