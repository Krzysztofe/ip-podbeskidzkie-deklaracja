import useStepFormFormik from "../../stepFormFormik/useStepFormFormik";

export const handleRadioChange = async (
  event: React.ChangeEvent<HTMLInputElement>, formik: ReturnType<typeof useStepFormFormik>["formik"], radioValue: string, textValue:string
) => {
  formik.handleChange(event);
  if (event.target.value !== "") {
    formik.setErrors({ [radioValue]: "", [textValue]: "" });
    await formik.validateForm();
    formik.setFieldValue(textValue, "");
  }
};

export const handleTextChange = async (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formik: ReturnType<typeof useStepFormFormik>["formik"],
  radioValue: string,
  textValue: string
) => {
  formik.handleChange(event);
  if (event.target.value !== "") {
    formik.setErrors({ [radioValue]: "", [textValue]: "" });
    await formik.validateForm();
    formik.setFieldValue(radioValue, "");
  }
};