import * as yup from "yup";
import { validationSchemaClause } from "./validationStepClauseForm";
import useClauseStore from "../../../../zustandStores/useClauseStore";

const useFormikClause = () => {
  const setConfirmed = useClauseStore(state => state.setConfirmed);

  const initialValues = { confirmation: false };

  const validation = validationSchemaClause as yup.ObjectSchema<
    typeof initialValues
  >;

  const onSubmit = () => {
    setConfirmed(true);
  };

  return { onSubmit, initialValues, validation };
};

export default useFormikClause;
