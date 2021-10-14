import React, { useContext } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyledButton, ButtonText } from "../loginComponents/styles";
import { CredentialsContext } from "../loginComponents/CredentialsContext";

export default function Inicio() {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const clearLogin = () => {
    AsyncStorage.removeItem("flowerCribCredentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <Text>Estas en inicio</Text>

      <StyledButton onPress={clearLogin}>
        <ButtonText>Logout</ButtonText>
      </StyledButton>
    </View>
  );
}