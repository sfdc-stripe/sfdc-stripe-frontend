import { Box, Button, Divider } from "@stripe/ui-extension-sdk/ui";

export const Logout = ({ logout }: { logout: () => void }) => (
  <>
    <Divider />
    <Box css={{ marginTop: "large" }} style={{ float: "right" }}>
      <Button onPress={logout}>Logout</Button>
    </Box>
  </>
);
