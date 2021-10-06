import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import Login from "../Login/index.js";
import RegisterExtended from "../RegisterExtended/index.js";
import { styles } from "./styles.js";
import logoMint from "../../assets/Logo_MintI.png";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logoMint} style={styles.logo} />
      <View style={styles.containerText}>
        <Login navigation={navigation} />
        <View style={styles.button}>
          {/*  <Text style={styles.plainText}>New User</Text>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        title="RegisterExtended"
                        onPress={() => navigation.navigate("RegisterExtended")}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

export default LandingPage;
