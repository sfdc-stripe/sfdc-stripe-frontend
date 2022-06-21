import Stripe from "stripe";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";
import fetchStripeSignature from "@stripe/ui-extension-sdk/signature";
import {
  createHttpClient,
  STRIPE_API_KEY,
} from "@stripe/ui-extension-sdk/http_client";

const stripe = new Stripe(STRIPE_API_KEY, {
  httpClient: createHttpClient(),
  apiVersion: "2020-08-27",
});

// We're going to replace this URL with the URL of your backend
const BACKEND_ORIGIN = "";

export type HTTP = {
  fetchCustomer: () => Promise<null | Stripe.Response<
    Stripe.Customer | Stripe.DeletedCustomer
  >>;
  callBackend: (
    endpoint: string,
    method: string,
    requestData?: any
  ) => Promise<any>;
};

export default ({ userContext, environment }: ExtensionContextValue): HTTP => ({
  fetchCustomer: async () =>
    environment?.objectContext?.id
      ? stripe.customers.retrieve(environment?.objectContext?.id)
      : null,
  callBackend: async (
    endpoint: string,
    method = "POST",
    requestData: any = {}
  ) => {
    const signaturePayload = {
      userId: userContext?.id,
      accountId: userContext?.account.id,
    };
    const referer = `https://dashboard.stripe.com${
      environment.mode === "test" ? "/test" : ""
    }/customers/${environment.objectContext?.id}`;
    return fetch(`${BACKEND_ORIGIN}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        referer,
        signature: await fetchStripeSignature(),
        ...requestData,
        ...signaturePayload,
      }),
    }).then((res) => res.json());
  },
});
