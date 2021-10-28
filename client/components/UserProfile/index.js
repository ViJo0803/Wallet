import React from "react";
import { View, Button, ScrollView } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../utils/colors.js";

//-------------qr------------------
import QRCode from "react-native-qrcode-svg";
//------------qr------------------------
function UserProfile({ navigation }) {
  const state = useSelector((state) => state.user.user);
  const balance = useSelector((state) => state.account.accounts);
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={
          state.foto ? { uri: state.foto } : require("../../assets/avatar.png")
        }
        style={styles.image}
        size={200}
      />

      <View>
        <Title style={styles.title}>
          {state.nombre} {state.apellidos}
        </Title>
        <View style={styles.adress}>
          <Icon
            style={styles.icon}
            color={colors.tertiary}
            name="map-marker-radius"
            size={15}
          />
          <Caption style={styles.caption}>{state.direccion}</Caption>
        </View>
        <View style={styles.adress}>
          <Icon
            name="phone"
            color={colors.tertiary}
            size={15}
            style={styles.icon}
          />
          <Caption style={styles.caption}>{state.telefono}</Caption>
        </View>
        <View style={styles.adress}>
          <Icon
            name="email"
            color={colors.tertiary}
            size={15}
            style={styles.icon}
          />
          <Caption style={styles.caption}>{state.mail}</Caption>
        </View>
        <View style={styles.adress}>
          <Icon
            name="account-key"
            color={colors.tertiary}
            size={15}
            style={styles.icon}
          />
          <Caption style={styles.caption}>{balance[0]?.alias}</Caption>
        </View>
      </View>

      <ScrollView>
        <View style={styles.wrapperbox}>
          <View style={styles.infobox}>
            <Title style={styles.cvu}>${balance[0]?.saldo}</Title>
            <Caption style={styles.buttonText}> Wallet </Caption>
          </View>
          <View style={styles.infobox}>
            <Title style={styles.cvu}>{balance[0]?.numerocuenta}</Title>

            <Caption style={styles.buttonText}> CVU </Caption>
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => navigation.navigate("Transfers")}>
            <View style={styles.menuItem}>
              <Icon
                style={styles.icon}
                name="heart-outline"
                size={20}
                color={colors.orange}
              />
              <Text style={styles.text}> To Favourites </Text>
            </View>
          </TouchableRipple>
        </View>
        <View>
          <TouchableRipple onPress={() => navigation.navigate("Services")}>
            <View style={styles.menuItem}>
              <Icon
                style={styles.icon}
                name="credit-card"
                size={20}
                color={colors.orange}
              />
              <Text style={styles.text}> Make a Service Payment </Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => navigation.navigate("Deposit")}>
            <View style={styles.menuItem}>
              <Icon
                style={styles.icon}
                name="account-check-outline"
                size={20}
                color={colors.orange}
              />
              <Text style={styles.text}> Recharge Your Wallet </Text>
            </View>
          </TouchableRipple>
        </View>
        <View style={styles.qrContainer}>
          <Text style={styles.qrText}>Share Alias</Text>
          <QRCode size={300} value={balance[0]?.alias} />
        </View>
      </ScrollView>
    </View>
  );
}

export default UserProfile;
