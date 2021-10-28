import React from "react";
//-----------Stripe-------------
import StripeApp from "../Stripe/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
//-----------Stripe------------

function Deposit({ navigation }) {
  return (
    <StripeProvider publishableKey="pk_test_51JiI7tLocRBDprJvLKsoj0cS3b5qyEaMWCXsU05Unf0zqmRwBS2vaHWDvmjV3O5KaBrPRXJEd1UeLBYR00lzSufB00Ngwt9Ifh">
      <StripeApp navigation={navigation} />
    </StripeProvider>
  );
}

export default Deposit;
