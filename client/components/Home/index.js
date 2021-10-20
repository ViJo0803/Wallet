import React, { useEffect, useMemo, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/actions/userActions";

//
import { CredentialsContext } from "../../loginComponents/CredentialsContext";

function Home({ route }) {

  const balance = useSelector((state) => state.account.accounts)

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleCuenta}>ARS</Text>
        <Text style={styles.titleCuenta}>{balance[0]?.saldo}</Text>
      </View>

    </View>
  );
}

export default Home;
