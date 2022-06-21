import { Box, Link, Inline } from "@stripe/ui-extension-sdk/ui";

import { CustomerData } from "../../utils/types";

export const ContactDetails = ({
  contact,
}: {
  contact: CustomerData["contact"];
}) => {
  const jobTitle =
    (contact?.title ? `${contact?.title} ` : "") + contact?.account.Name;
  const address =
    contact?.account.BillingCity && contact?.account.BillingCountry
      ? `${contact?.account.BillingCity}, ${contact?.account.BillingCountry}`
      : contact?.account.BillingCity || contact?.account.BillingCountry || "";
  const website = contact?.account.Website;

  return (
    <Box css={{ layout: "column", gap: "small" }}>
      <Inline css={{ font: "heading" }}>{contact?.name}</Inline>
      <Inline css={{ font: "body", color: "secondary" }}>
        {contact?.email}
      </Inline>
      <Link href={contact?.link} target="_blank">
        See customer on SFDC{" "}
      </Link>
      <Box
        css={{
          layout: "column",
          gap: "large",
          background: "container",
          width: "fill",
          margin: "small",
          padding: "large",
        }}
      >
        {jobTitle && (
          <Inline>
            💼{"\u00A0\u00A0"}
            {jobTitle}
          </Inline>
        )}
        {address && (
          <Inline>
            📍{"\u00A0\u00A0"}
            {address}
          </Inline>
        )}
        {website && (
          <Inline>
            🌎{"\u00A0\u00A0"}
            {website}
          </Inline>
        )}
      </Box>
    </Box>
  );
};
