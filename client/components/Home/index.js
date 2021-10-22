import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { colors } from "../../utils/colors.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Home({ navigation }) {
  const balance = useSelector((state) => state.account.accounts);
  const state = useSelector((state) => state.user.user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}> Hello, {state.nombre}!</Text>
        <Text style={styles.title}> Current balance </Text>
        <Text style={styles.balance}> $ {balance[0]?.saldo || 0}</Text>
      </View>

      <Text style={styles.shortcuts}> Your shortcuts </Text>
      <View style={styles.buttonCardContainer}>
        <View style={styles.buttonCard}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("QRScan")}
          >
            <FontAwesome5 name="qrcode" color={colors.brand} size={60} />
          </TouchableOpacity>
          <Text style={styles.shortcutsTitle}> Scan with QR </Text>
        </View>

        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Transfers")}>
            <FontAwesome5 name="exchange-alt" color={colors.brand} size={60} />
          </TouchableOpacity>
          <Text style={styles.shortcutsTitle}> Transfers </Text>
        </View>

        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Services")}>
            <FontAwesome5 name="building" color={colors.brand} size={60} />
          </TouchableOpacity>
          <Text style={styles.shortcutsTitle}> Services </Text>
        </View>

        <View style={styles.buttonCard}>
          <TouchableOpacity onPress={() => navigation.navigate("Deposit")}>
            <FontAwesome5
              name="money-bill-wave"
              color={colors.brand}
              size={60}
            />
          </TouchableOpacity>
          <Text style={styles.shortcutsTitle}> Deposit </Text>
        </View>
      </View>

      <View>
        <ScrollView scrollEventThrottle={16}>
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                height: 170,
                width: "100%",
                backgroundColor: colors.primary,
                padding: 5,
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    height: 140,
                    width: 600,
                    marginLeft: 10,
                    marginRight: 5,
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/banners/crypto.jpg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    height: 140,
                    width: 600,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/banners/covid.jpg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    height: 140,
                    width: 600,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/banners/halloween.jpg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    height: 140,
                    width: 600,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/banners/saving.jpg")}
                      style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: "cover",
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
