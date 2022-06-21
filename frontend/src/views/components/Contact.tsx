import { CustomerData } from "../utils/types";
import { Activities } from "./Contact/Activities";
import { ContactDetails } from "./Contact/ContactDetails";
import { Logout } from "./Contact/Logout";
import { NotFound } from "./Contact/NotFound";

export const Contact = ({
  customerData,
  postNote,
  logout,
}: {
  customerData: CustomerData;
  postNote: (note: string) => void;
  logout: () => void;
}) => {
  if (!customerData.contact) return <NotFound />;
  return (
    <>
      <ContactDetails contact={customerData.contact} />
      <Activities
        {...{
          cases: customerData.cases,
          notes: customerData.notes,
          tasks: customerData.tasks,
          postNote,
        }}
      />
      <Logout {...{ logout }} />
    </>
  );
};
