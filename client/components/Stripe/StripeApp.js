import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
//---------------deposit----------------
import { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../store/actions/accountActions";
import { deposit } from "../../store/actions/accountActions";
import { CredentialsContext } from "../../loginComponents/CredentialsContext";
//-----------------deposit-----------------
import { URL_STRIPE_3000 } from "../../constantes"


const StripeApp = (props) => {
  //--------------deposit---------------------
  const dispatch = useDispatch();
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email1 } = storedCredentials;

  const { user } = useSelector((state) => state.user);
  const balance = useSelector((state) => state.account.accounts);

  useEffect(() => {
    dispatch(getAccount(user.idusuario));
  }, []);

  //----------------------deposit--------------------

  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const [paymentAmount, setPaymentAmount] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${URL_STRIPE_3000}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();

    return { clientSecret, error };
  };


  const handlePayPress = async () => {
    console.log(paymentAmount)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }

    const billingDetails = {
      email: email,
    };
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          const id = balance[0].idcuentas
          const idUsuario = user.idusuario
          dispatch(deposit(id, paymentAmount, idUsuario))


        }
      }
    } catch (e) {
      console.log(e);
    }

  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Monto a Cargar"
        keyboardType="email-address"
        onChange={(value) => setPaymentAmount(value.nativeEvent.text)}
        style={styles.input}
      ></TextInput>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
