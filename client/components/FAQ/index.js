import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Title } from "react-native-paper";
import { styles } from "./styles";

export default function FAQ({ navigation }) {
  return (
    <View style={styles.fullContainer}>
      <ScrollView>
        <Title style={styles.question}>How do I log into my account?</Title>

        <Text style={styles.answer}>
          When you log in for the first time, you have the Link to "Sign up" to
          create an account.Then, you can fulfill the register inputs and
          submit. If you already have an account, You can enter through the
          "Login" with email and password, or by “Sign in with Google” button
          that use your google account signed on your device.
        </Text>

        <Title style={styles.question}>Once logged in, you can:</Title>

        <Text style={styles.answer}>
          -See your account: Open the menu on the top left, select "Accounts"
          and you will see your current balance and the list of transfers made.
          -See your profile: Open the menu on the top left, select "User
          Profile", there you can see the data of your user, account balance and
          CVU. -Add money to your account. -Transfer your money to another
          "Mint" account. -Add a contact to transfer by QR scanning. -Pay
          Services.
        </Text>

        <Title style={styles.question}>How to edit my profile?</Title>

        <Text style={styles.answer}>
          In “User Profile”, go to the link “Edit Profile”, there you will be
          able to re enter and edit your profile.
        </Text>

        <Title style={styles.question}>
          How to deposit money in my account?
        </Title>

        <Text style={styles.answer}>
          On the main screen, tap on the “Deposit” icon, you will be able to
          complete the fields with the data of the amount of money to be
          deposited, email, and card data Visa of origin: number, expiration
          date, security code and postal code.
        </Text>

        <Title style={styles.question}> How to make a transfer?</Title>

        <Text style={styles.answer}>
          On the main screen, tap on the “Transfers” icon, there you will be
          able to see the list of your contacts previously added.By tapping on
          the contact, you will redirected to the screen where you can set the
          amount to be transferred, and confirm the operation.
        </Text>

        <Title style={styles.question}>How to pay your services?</Title>

        <Text style={styles.answer}>
          On the main screen, tap on the “Services” icon, and you will be able
          to see the services available to make payments, you also have the
          search option. Select an icon and you will access the screen where you
          will have to enter the bill reference code and the amount and confirm
          the operation.
        </Text>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}> Go Back </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
