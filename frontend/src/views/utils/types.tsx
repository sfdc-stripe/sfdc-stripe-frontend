export enum Status {
  Loading,
  Loaded,
  NotSetup,
  NetworkError,
}

export type Note = {
  id: string;
  body: string;
  link: string;
};

export type Case = {
  accountid: string;
  casenumber: string;
  subject: string;
  body: string;
  link: string;
};

export type Task = {
  id: string;
  subject: string;
  tasksubtype: string;
  link: string;
};

export type CustomerData = {
  contact?: {
    id: string;
    phone: string;
    email: string;
    title: string;
    name: string;
    link: string;
    account: {
      Name: string;
      AnnualRevenue: string;
      NumberOfEmployees: string;
      Website: string;
      BillingCity: string;
      BillingCountry: string;
    };
  };
  tasks?: Task[];
  notes?: Note[];
  cases?: Case[];
};
