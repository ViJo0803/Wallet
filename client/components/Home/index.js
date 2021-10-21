import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../../utils/colors.js";

function Home({ navigation }) {
  const balance = useSelector((state) => state.account.accounts);
  const state = useSelector((state) => state.user.user);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.welcome}>Welcome, {state.nombre}</Text>
        <Text style={styles.title}>Current balance</Text>
        <Text style={styles.title}>{balance[0]?.saldo || 0} ARS</Text>
      </View>
      <View style={styles.buttonGrid}>
        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Ionicons name="md-qr-code-sharp" color={colors.brand} size={70} />
          </TouchableOpacity>
          <Text>Scan with QR</Text>
        </View>
        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Transfers")}>
            <FontAwesome5 name="exchange-alt" color={colors.brand} size={70} />
          </TouchableOpacity>
          <Text>Transfers</Text>
        </View>
        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Services")}>
            <FontAwesome5 name="building" color={colors.brand} size={70} />
          </TouchableOpacity>
          <Text>Services</Text>
        </View>
        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Deposit")}>
            <MaterialCommunityIcons
              name="cash-plus"
              color={colors.brand}
              size={70}
            />
          </TouchableOpacity>
          <Text>Deposit</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;
