import React from "react";
import { View, Button } from "react-native";
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


function UserProfile({ navigation }) {

  const state = useSelector((state) => state.user.user);
  const balance = useSelector((state) => state.account.accounts);


  console.log("this is the state ", state);
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={ state.foto? {uri: state.foto} : require("../../assets/avatar.png")}
        style={styles.image}
        size={200}
      />

      <View>
        <Title style={styles.title}>
          {state.nombre} {state.apellidos}
        </Title>
        <View style={styles.adress}>
          <Icon style={styles.icon} color={"#232020"} name="map-marker-radius" size={15} />
          <Caption style={styles.caption}>{state.direccion}</Caption>
        </View>
        <View style={styles.adress}>
          <Icon name="phone" color={"#232020"} size={15} style={styles.icon} />
          <Caption style={styles.caption}>{state.telefono}</Caption>
        </View>
        <View style={styles.adress}>
          <Icon name="email" color={"#232020"} size={15} style={styles.icon} />
          <Caption style={styles.caption}>{state.mail}</Caption>
        </View>
      </View>
      <View style={styles.wrapperbox}>
        <View style={styles.infobox}>
          <Title style={styles.title}>$ {balance[0].saldo}</Title>
          <Caption style={styles.caption}>Wallet</Caption>
        </View>
        <View style={styles.infobox}>
          <Title style={styles.title}>{balance[0].numerocuenta}</Title>
          <Caption style={styles.caption}>CVU</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("Transfers")}>
          <View style={styles.menuItem}>
            <Icon style={styles.icon} name="heart-outline" size={20} color={"#FF6347"} />
            <Text style={styles.text}>To Favourites</Text>
          </View>
        </TouchableRipple>

      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("Services")}>
          <View style={styles.menuItem}>
            <Icon style={styles.icon} name="credit-card" size={20} color={"#FF6347"} />
            <Text style={styles.text}>Make a Service Payment</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate("Deposit")}>
          <View style={styles.menuItem}>
            <Icon style={styles.icon} name="account-check-outline" size={20} color={"#FF6347"} />
            <Text style={styles.text}>Recharge Your Wallet</Text>
          </View>
        </TouchableRipple>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => console.log("Deberia ir a Editar perfil :)")/*</View>navigation,navigate(edituserprofile)*/}>
          <View style={styles.menuItem}>
            <Icon style={styles.icon} name="share-outline" size={20} color={"#FF6347"} />
            <Text style={styles.text}>Edit Profile</Text>
          </View>
        </TouchableRipple>
      </View>

    </View>
  );
}

export default UserProfile;
