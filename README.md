# A Salesforce Integration for Stripe Apps

![Customer Insights View Frame](https://user-images.githubusercontent.com/4209733/171068761-508a72c0-7524-4e0e-b950-452cfa8ef9ab.png)

**This repo contains the code that allows you to deploy a Stripe App that integrates with your Salesforce.com (SFDC) instace. Once deployed and connected you will see customer information retrieved from SFDC inside Stripe, without the need to leave the dashboard. Get work done faster**

[Learn more about the Stripe App for SFDC here (YouTube)](https://youtu.be/EfLHVQbRLEE?t=1138)

- **Sync your customer’s contact information from Stripe to SFDC**

  - Use this app to quickly leave notes on your customers' profiles on SFDC directly from within Stripe.

- **Better understand how your operations are impacting your sales**

  - At a glance, retrieve customer data to answer operational questions about customer activity, payments or invoicing.

- **Identify how you can drive better customer success**
  - Inspect advanced information such as past or ongoing issues (cases) to help you drive better decision-making during critical customer success journeys.

## How to install: Setup guide

- Clone this repo
- Follow all the steps listed in the Stripe Docs to get the local environment set up - [these are very clearly explained here](https://stripe.com/docs/stripe-apps/create-app) up until but excludiing "Step 2. Create an app"
- Instead of creating a new app, navigate to the folder you cloned (this repo)
- Navigate to the `frontend` directory and run `stripe apps upload` - this will upload this app to your account.
- Once you've uploaded the app and acknowledged the terms of usage, launch the app from the local environment using `stripe apps start`
- Create an Oauth App in SFDC by following [these steps](https://docs.microfocus.com/UCMDB/11.0/cp-docs/docs/eng/doc_lib/Content/Remedyforce_CreateConnectedApps.htm), and note down your `Consumer Key` and `Consumer Secret` which you will be using once you setup the backend repository.
- Edit the `stripe-app.json` file in the main directory and replace the values under `connect-src` to match the URL of your own backend.

## Questions & Support

Support is available through the opening of a github issue and tagged with the "question" label or via [StackOverflow](https://stackoverflow.com/questions/tagged/sfdcstripe) using the tag `stripeappsfdc`

## Where to go from here?

![Customize this Stripe App](https://user-images.githubusercontent.com/4209733/171066762-0d40e06c-1d56-49ab-a09a-7323e0c49bf8.png)

### Customize this app!

- If you need help customizing this app to fit your specific needs - [contact me through this form](https://stripe-apps-form-b45a.netlify.app/)
- Want to publish a custom version of this app onto the marketplace but keep it private? You can! This is useful for people who want to distribute a private version of an app only to members with access to a specific Stripe account. [Read this guide here to learn more](https://stripe.com/docs/stripe-apps/distribution-options)
- Fork this app and build a better version and you want to distribute it onto the public Stripe Marketplace? [Read this guide to publish your app](https://stripe.com/docs/stripe-apps/publish-app)

---

### Powered by:

<img src="https://logotyp.us/files/salesforce.svg" width="100" style="max-width: 100%;"/>

<img src="https://github.com/stripe/stripe-apps/raw/main/.readme/stripe-apps-burple.svg" width="100" style="max-width: 100%;" />
