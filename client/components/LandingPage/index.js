import React from "react";
import { View, Image } from "react-native";
import Login from "../Login";
import { styles } from "./styles";
import logoMint from "../../assets/Logo_MintI.png";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logoMint} style={styles.logo} />
      <View style={styles.containerText}>
        <Login navigation={navigation} />
      </View>
    </View>
  );
}

export default LandingPage;
