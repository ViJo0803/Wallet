import express from "express";
import { resolve } from "path";

const app = express();
const port = 3000; //add your port here

const PUBLISHABLE_KEY =
  "pk_test_51JiI7tLocRBDprJvLKsoj0cS3b5qyEaMWCXsU05Unf0zqmRwBS2vaHWDvmjV3O5KaBrPRXJEd1UeLBYR00lzSufB00Ngwt9Ifh";
const SECRET_KEY =
  "sk_test_51JiI7tLocRBDprJvQYlUcV7C23mzDC853IRsiqRhaPlk6R3ec8tMS8Vxm6dEMHX0byDhHUxI6tkQUWnejjPOMbUA001twn6xut";
import Stripe from "stripe";

//Confirm the API version from your stripe dashboard
const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });
stripe.setMaxNetworkRetries(2);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "usd",
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});

//-------------------------aceptar pagos--------------------------//

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2020- 08-27" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "usd",
    customer: customer.id,
  });
  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});
