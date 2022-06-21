import { ContextView, Spinner } from "@stripe/ui-extension-sdk/ui";

import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import { useEffect, useState } from "react";

import { Setup } from "./components/Setup";
import { NetworkError } from "./components/NetworkError";
import { Contact } from "./components/Contact";
import { Status, CustomerData } from "./utils/types";
import HTTP from "./utils/http";

const App = (context: ExtensionContextValue) => {
  const [redirectLink, setRedirectLink] = useState("");
  const [status, setStatus] = useState(Status.Loading);
  const [customerData, setCustomerData] = useState<CustomerData>({});

  const HTTPClient = HTTP(context);

  useEffect(() => {
    (async () => {
      const customer = await HTTPClient.fetchCustomer();
      try {
        const res = await HTTPClient.callBackend("/api/customer", "POST", {
          email: (customer as any).email,
        });
        if ((res as any).redirect) {
          setStatus(Status.NotSetup);
          setRedirectLink(res.redirect);
        } else {
          setStatus(Status.Loaded);
          setCustomerData(res);
        }
      } catch (e: any) {
        setStatus(Status.NetworkError);
      }
    })();
  }, []);

  const postNote = async (note: string) => {
    const res = await HTTPClient.callBackend("/api/chatter", "POST", {
      email: customerData?.contact?.email,
      message: note,
    });
    setCustomerData(res);
  };

  const logout = async () => {
    const res = await HTTPClient.callBackend("/api/logout", "POST");
    setRedirectLink((res as any).redirect);
    setStatus(Status.NotSetup);
    setCustomerData({});
  };

  return (
    <ContextView
      title="Salesforce Insights"
      description="Glance at customer data from Salesforce inside Stripe"
      externalLink={{
        label: "Learn more",
        href: "https://www.opensauce.it/about",
      }}
      brandColor="#00a2de"
    >
      {status === Status.Loading && <Spinner size="large" />}
      {status === Status.NotSetup && <Setup redirectLink={redirectLink} />}
      {status === Status.NetworkError && <NetworkError />}
      {status === Status.Loaded && (
        <Contact
          {...{
            customerData,
            postNote,
            logout,
          }}
        />
      )}
    </ContextView>
  );
};

export default App;
