import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  formik: any;
  value: string;
}

const TextInputsErrors = (props: Props) => {
  return (
    <Box sx={{ height: theme => theme.spacing(3) }}>
      {props.formik.touched[props.value as keyof typeof props.formik.touched] &&
        props.formik.errors[props.value as keyof typeof props.formik.errors] && (
          <Typography variant="subtitle2" color="error">
            {props.formik.errors[props.value as keyof typeof props.formik.errors]}
          </Typography>
        )}
    </Box>
  );
};

export default TextInputsErrors;
