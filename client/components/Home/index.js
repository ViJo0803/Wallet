import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { colors } from "../../utils/colors.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Category from "./Category";
import { banners } from "./banners";

function Home({ navigation }) {
  const balance = useSelector((state) => state.account.accounts);
  const state = useSelector((state) => state.user.user);

  return (
    <View style={styles.bigBox}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcome}> Hello, {state.nombre}!</Text>
        <Text style={styles.title}> Current balance </Text>
        <Text style={styles.balance}> $ {balance[0]?.saldo || 0}</Text>
      </View>
      <Text style={styles.shortcuts}> Your Shortcuts </Text>

      <View style={styles.buttonCardContainer}>
        <View style={styles.buttonCard}>

     
   
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QRScan")}>
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

      {/* <View style={styles.bannerContainer}>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.viewScrollStyles}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/banners/crypto.jpg")}
                    size={20}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image source={require("../../assets/banners/covid.jpg")} />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/banners/halloween.jpg")}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity>
                  <Image source={require("../../assets/banners/saving.jpg")} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View> */}
    </View>
  );
}

export default Home;
