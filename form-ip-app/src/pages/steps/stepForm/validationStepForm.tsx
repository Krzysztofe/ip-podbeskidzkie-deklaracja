import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Imię wymagane").min(3, "Min. 3 znaki"),
  surname: yup.string().required("Nazwisko wymagane").min(3, "Min. 3 znaki"),
  adress: yup.string().required("Adres wymagany").min(3, "Min. 3 znaki"),
  phone: yup.string().required("Nr wymagany").min(6, "Min. 6 znaków"),
  email: yup.string().required("E-mail wymagany"),
  employer: yup.string().test(
    'oneOfRequired',
    'Podaj pracodawcę',
    function(item) {
      return (this.parent.employer || this.parent.employerOther)
    }
  ),
  employerOther: yup.string().test(
    'oneOfRequired',
    'Podaj pracodawcę',
    function(item) {
      return (this.parent.employer || this.parent.employerOther)
    }
  ),
 
});
    


