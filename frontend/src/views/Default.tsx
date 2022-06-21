import {
  Box,
  ContextView,
  Link,
  Button,
  Banner,
  Img,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

const App = ({ environment }: ExtensionContextValue) => {
  return (
    <ContextView title="Salesforce Customers View " brandColor="#00a2de">
      <Box
        css={{
          backgroundColor: "surface",
          font: "body",
          borderRadius: "small",
        }}
      >
        <Img
          src="https://i.imgur.com/dkeSmvn.png"
          width="284"
          height="187"
          alt="Gross margin"
          crossOrigin="anonymous"
        />
        <Banner
          type="default"
          title="Go to Customer"
          description="To see this integration in action, please select a customer"
          actions={
            <Link
              type="primary"
              href={`https://dashboard.stripe.com${
                environment.mode === "test" ? "/test" : ""
              }/customers`}
            >
              <Button>Navigate to customers </Button>
            </Link>
          }
        />{" "}
      </Box>{" "}
    </ContextView>
  );
};

export default App;
