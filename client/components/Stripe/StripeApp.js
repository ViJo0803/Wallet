import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
//---------------deposit----------------
import { useEffect, useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../store/actions/accountActions";
import { getUser } from "../../store/actions/userActions";
import { deposit } from "../../store/actions/accountActions";
import { CredentialsContext } from "../../loginComponents/CredentialsContext";
//-----------------deposit-----------------
import { URL_STRIPE_3000} from "../../constantes"
import { URL_API_3001 } from "../../constantes";
import axios from "axios";

//let montoCargado = ''

//ADD localhost address of your server

const StripeApp = (props) => {
  //--------------deposit---------------------
  const dispatch = useDispatch();
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email1 } = storedCredentials;


  /* const useEffectDispatch = async (id, paymentAmount) => {
    useEffect(() => {
      dispatch(deposit(id, paymentAmount));
    }, []);
  } */


  /* useEffect(() => {
    dispatch(getUser(email));
  }, []); */

  const { user } = useSelector((state) => state.user);
  const balance = useSelector((state) => state.account.accounts);

  useEffect(() => {
    dispatch(getAccount(user.idusuario));
  }, []);

  //const cuentas = useSelector((state1) => state1.accounts);
  //console.log("userrrrrrrrrrrrr" + user.idusuario);
  // console.log("cuenta" + balance[1].idcuentas);

  //const cuentas = useSelector((state1) => state1.accounts);
  //console.log("user " + user.idusuario);
  //console.log("cuenta " + balance[0].idcuentas);

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
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }

    const billingDetails = {
      email: email,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
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
          // hay que conseguir el idcuenta a partir del idusuario
          // useEffectDispatch(id, paymentAmount)
          dispatch(deposit(id, paymentAmount))
          //"http://4c54-181-31-250-253.ngrok.io"  3001

          // hacer el put a salario aca

        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
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
