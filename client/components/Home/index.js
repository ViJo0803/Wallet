import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { Alert } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleCuenta}>Account $</Text>
        <TextInput
          style={{
            height: 30,
            border: 0,
            fontSize: 17
          }}
          defaultValue="   15.618,45"
        />
        <Text style={styles.titleCuenta}>Account US$</Text>
        <TextInput
          style={{
            height: 30,
            border: 0,
            fontSize: 17
          }}
          defaultValue="   2.300"
        />
      </View>
      <View>
        <Text style={styles.titleTransfer}>Transfers</Text>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Retiro $ 10 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Deposito $ 80 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Deposito $ 980 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Deposito $ 180 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Retiro $ 80 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            <Text style={styles.textname}>Deposito $ 10 000</Text>
            <Text style={styles.textdate}>10/09/2021</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Home;
