import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyledButton, ButtonText } from "../loginComponents/styles";
import { CredentialsContext } from "../loginComponents/CredentialsContext";


export default function Inicio({navigation}) {
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
      
    
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home')
        }
        />

        <Button
          title="Go to User Profile"
          onPress={() =>
            navigation.navigate('User Profile')
          }
        />
      
      <Button
        title="Go to Accounts"
        onPress={() =>
          navigation.navigate('Accounts')
        }
      />
      

      <StyledButton onPress={clearLogin}>
        <ButtonText>Logout</ButtonText>
      </StyledButton>
    </View>
    






  );
}