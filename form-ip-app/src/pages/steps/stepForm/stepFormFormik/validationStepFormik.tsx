import * as yup from "yup";

const errMsg = "Podaj dane";
const validation = yup.string().required(errMsg).min(3, "Min. 3 znaki");
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
  employer: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.employer || this.parent.employerOther;
  }),
  employerOther: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.employer || this.parent.employerOther;
  }),

  workplace: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.workplace || this.parent.workplaceOther;
  }),
  workplaceOther: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.workplace || this.parent.workplaceOther;
  }),
  contract: validation,
  worktime: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.worktime || this.parent.workTimeOther;
  }),
  workTimeOther: yup.string().test("oneOfRequired", errMsg, function (item) {
    return this.parent.worktime || this.parent.workTimeOther;
  }),
  login: validation,
  membership: validation,
});
