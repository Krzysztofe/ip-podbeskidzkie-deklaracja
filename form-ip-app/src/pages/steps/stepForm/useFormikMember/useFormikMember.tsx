import { initialValues as initialValuesInForm } from "./initialValuesMember";
import { validationSchema } from "./validationFormikMember";
import { useFormMemberStore } from "../../../../zustandStores/useFormMemberStore";

const useFormikMember = () => {
  const setSubmited = useFormMemberStore((state) => state.setSubmited);

  const initialValues = initialValuesInForm;

  const validation = validationSchema;

  const onSubmit = () => {
    setSubmited(true);
  };

  return { onSubmit, initialValues, validation };
};

export default useFormikMember;
