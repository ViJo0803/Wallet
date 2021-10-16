import React from "react";
import { View, Image, Button, Text } from "react-native";
import Login from "../Login";
import { styles } from "./styles";
import logoMint from "../../assets/Logo_MintI.png";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logoMint} style={styles.logo} />
      <Text>HELLO ASSHOLE</Text>
      <View style={styles.containerText}>
        <Button onPress={()=> navigation.navigate('Drawer')} title='Go Go Power Rangers'/>
      </View>
    </View>
  );
}

export default LandingPage;
