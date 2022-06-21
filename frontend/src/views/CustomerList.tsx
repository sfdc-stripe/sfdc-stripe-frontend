import { Box, ContextView, Banner, Img } from "@stripe/ui-extension-sdk/ui";

const App = () => {
  return (
    <ContextView title="Salesforce Customers View" brandColor="#00a2de">
      <Box
        css={{
          backgroundColor: "surface",
          font: "body",
          borderRadius: "small",
        }}
      >
        {/*<Img
          src="https://i.imgur.com/l92CEh4.jpg"
          width="284"
          height="187"
          alt="Gross margin"
          crossOrigin="anonymous"
          css={{ transform: "rotate(180deg)" }}
      />*/}
        <Banner
          type="default"
          title="Select a customer"
          description="Select a customer in your Customer list (on the dashboard), to see their relative SFDC records"
        />
      </Box>
    </ContextView>
  );
};

export default App;
