import React from "react";
import { View, Text, } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

function Home() {

  const balance = useSelector((state) => state.account.accounts)

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.welcome}>Welcome, {name}</Text>
        <Text style={styles.title}>Current balance</Text>
        <Text style={styles.title}>{balance[0]?.saldo || 0} ARS</Text>
      </View>
    </View>
  );
}

export default Home;
