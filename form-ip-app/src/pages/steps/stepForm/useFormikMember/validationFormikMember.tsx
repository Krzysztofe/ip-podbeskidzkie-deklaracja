import * as yup from "yup";

const errMsg = "Podaj dane";
const validation = yup
  .string()
  .transform((value, originalValue) =>
    typeof originalValue === "string" ? originalValue.trim() : originalValue
  )
  .required(errMsg)
  .min(3, "Min. 3 znaki");
const validationWithOther = (radioInput: string, textInput: string) => {
  return yup
    .string()
    .transform((value, originalValue) =>
      typeof originalValue === "string" ? originalValue.trim() : originalValue
    )
    .test("oneOfRequired", errMsg, function (item) {
      return this.parent[radioInput] || this.parent[textInput];
    });
};
const phoneRegex = /^\d{9,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validationSchema = yup.object({
  name: validation,
  surname: validation,
  city: validation,
  phone: yup.string().required(errMsg).matches(phoneRegex, "Min. 9 cyfr"),
  email: yup
    .string()
    .required(errMsg)
    .matches(emailRegex, "Podaj właściwy e-mail"),
  employer: validationWithOther("employer", "employerOther"),
  employerOther: validationWithOther("employer", "employerOther"),

  workplace: validationWithOther("workplace", "workplaceOther"),
  workplaceOther: validationWithOther("workplace", "workplaceOther"),

  contract: validation,

  workTime: validationWithOther("workTime", "workTimeOther"),
  workTimeOther: validationWithOther("workTime", "workTimeOther"),

  login: validation,
  membership: validation,
});
