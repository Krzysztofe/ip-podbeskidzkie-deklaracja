import * as yup from "yup";

const errMsg = "Podaj dane";
const validation = yup.string().required(errMsg).min(3, "Min. 3 znaki");
const validationWithOther = (radioInput: string, textInput: string) => {
  return yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent[radioInput] || this.parent[textInput];
  });
};
const phoneRegex = /^[0-9]{6,}$/;

export const validationSchema = yup.object({
  name: validation,
  surname: validation,
  city: validation,
  phone: yup
    .string()
    .required(errMsg)
    .matches(phoneRegex, "Podaj poprawny numer telefonu")
    .min(9, "Min. 9 znaków"),
  email: yup.string().required(errMsg).email("Podaj poprawny email"),

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
