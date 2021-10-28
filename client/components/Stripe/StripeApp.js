import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
} from "react-native";

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
import { URL_STRIPE_3000 } from "../../constantes";
import { URL_API_3001 } from "../../constantes";
import axios from "axios";
import { colors } from "../../utils/colors";

const StripeApp = ({ navigation }) => {
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
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          const id = balance[0].idcuentas;
          const idUsuario = user.idusuario;
          dispatch(deposit(id, paymentAmount, idUsuario));
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> PUT YOUR CARD INFORMATION </Text>
      <TextInput
        autoCapitalize="none"
        placeholder="Amount"
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
      <Pressable
        onPress={handlePayPress}
        disabled={loading}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Recharge Balance</Text>
      </Pressable>
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
  title: {
    fontSize: 25,
    color: colors.tertiary,
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 50,
    marginLeft: 10,
  },
  input: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
    marginBottom: 15,
  },
  card: {
    backgroundColor: colors.primary,
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
  button: {
    padding: 15,
    backgroundColor: colors.brand,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
    height: 60,
  },
  buttonText: {
    color: colors.primary,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
});
