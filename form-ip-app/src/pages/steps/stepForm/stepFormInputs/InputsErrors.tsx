import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStepFormFormik from "../stepFormFormik/useStepFormFormik";
import useStepClauseFormik from "../../stepClause/stepClauseForm/useStepClauseFormik";

type Props = {
  value: string;
  otherValue?: string;
  formik:
    | ReturnType<typeof useStepFormFormik>["formik"]
    | ReturnType<typeof useStepClauseFormik>["formikClause"];
};



const InputsErrors = (props: Props) => {
  const touchedValue =
    props.formik.touched[props.value as keyof typeof props.formik.touched];
  const errorValue =
    props.formik.errors[props.value as keyof typeof props.formik.errors];
  const showError = touchedValue && errorValue;

  if (props.otherValue) {
    return (
      <Box sx={{ height: theme => theme.spacing(2.5) }}>
        {(props.formik.touched[
          props.otherValue as keyof typeof props.formik.touched
        ] ||
          touchedValue) &&
          errorValue && (
            <Typography variant="subtitle1" color="error">
              {errorValue}
            </Typography>
          )}
      </Box>
    );
  }
  return (
    <Box sx={{ height: theme => theme.spacing(2.5) }}>
      {showError && (
        <Typography variant="subtitle1" color="error">
          {errorValue}
        </Typography>
      )}
    </Box>
  );
};

export default InputsErrors;
