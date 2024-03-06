export type ModelMember = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  login: string;

  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postCode: string;

  employer: string;
  employerOther: string;
  workplace: string;
  workplaceOther: string;
  contract: string;
  workTime: string;
  workTimeOther: string;
  department: string;
  membership: string;
};

export const initialValues: ModelMember = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  login: "",

  city: "",
  street: "",
  houseNumber: "",
  apartmentNumber: "",
  postCode: "",

  employer: "",
  employerOther: "",
  workplace: "",
  workplaceOther: "",
  contract: "",
  workTime: "",
  workTimeOther: "",
  department: "",
  membership: "",
};
