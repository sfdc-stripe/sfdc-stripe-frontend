import {
  Box,
  Link,
  Button,
  Inline,
  List,
  ListItem,
} from "@stripe/ui-extension-sdk/ui";

export const Setup = ({ redirectLink }: { redirectLink: string }) => (
  <>
    <Box css={{ margin: "large" }}>
      View contact data and their relevant information from your own SalesForce
      instance directly in your Stripe Dashboard. You need to setup SalesForce
      following the instructions and then login.
    </Box>

    <Box css={{ width: "fill" }}>
      <Link type="primary" href={redirectLink}>
        <Button size="large" type="primary" css={{ margin: "large" }}>
          Login
        </Button>
      </Link>
      <Button size="large" css={{ margin: "large" }}>
        Sign-up
      </Button>
    </Box>
    <Box css={{ margin: "large" }} />
    <Box>
      <Inline css={{ font: "body", color: "primary", fontWeight: "semibold" }}>
        Resources and Links
      </Inline>
      <List aria-label="Useful links">
        <ListItem
          value={
            <Link type="primary" href="" target="_blank">
              Open
            </Link>
          }
          secondaryTitle={"SFDC Customer Portal"}
        />
        <ListItem
          value={
            <Link type="primary" href="" target="_blank">
              Read FAQs
            </Link>
          }
          secondaryTitle={"SFDC Stripe App FAQs"}
        />
        <ListItem
          value={
            <Link type="primary" href="" target="_blank">
              orlie@lf.gg
            </Link>
          }
          secondaryTitle={"SFDC Stripe App FAQs"}
        />
        <ListItem
          value={
            <Link type="primary" href="" target="_blank">
              @stripedev
            </Link>
          }
          secondaryTitle={"Follow on Twitter"}
        />
      </List>
    </Box>
  </>
);
