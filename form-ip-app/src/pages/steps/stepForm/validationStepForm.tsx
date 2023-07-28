import * as yup from "yup";

const errMsg = "Podaj dane";
const validation = yup.string().required(errMsg).min(3, "Min. 3 znaki");

export const validationSchema = yup.object({
  name: validation,
  surname: validation,
  adress: validation,
  phone: yup.string().required(errMsg).min(6, "Min. 6 znaków"),
  email: yup.string().required(errMsg),
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
  worktime: validation,
  department: validation,
  login: validation,
  membership: validation,
});
