import React from "react";
import { View, Button, Text } from "react-native";
import Login from "../Login";
import { styles } from "./styles";

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
      <Text style={styles.title}>Mint</Text>
        <Login />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.buttonContainer}
            title="Register"
            onPress={() => navigation.navigate("RegisterInit")}
          />
      </View>
    </View>
  );
}

export default LandingPage;
