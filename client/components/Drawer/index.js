import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Statistics from "../Statistics/index.js";
import UserProfile from "../UserProfile/index";
import TabNav from "../TabNav/index.js";
import AccountNav from "../Accounts/AccountNav/index.js";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { CredentialsContext } from "../../loginComponents/CredentialsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../utils/colors.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  switch (routeName) {
    case "Coins":
      return "Coins";
    case "Transfers":
      return "Transfers";
    case "Services":
      return "Services";
    case "Deposit":
      return "Deposit";
    default:
      return "Home";
  }
}

function DrawerBar() {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const clearLogin = () => {
    AsyncStorage.removeItem("flowerCribCredentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Drawer.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.brand,
        drawerActiveBackgroundColor: colors.green,
        drawerInactiveBackgroundColor: colors.secondary,
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={() => clearLogin()}
              style={{ backgroundColor: colors.secondary }}
              icon={() => (
                <FontAwesome5
                  name="sign-out-alt"
                  color={colors.brand}
                  size={20}
                />
              )}
            />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNav}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          drawerIcon: () => (
            <FontAwesome5 name="home" color={colors.brand} size={20} />
          ),
        })}
      />
      <Drawer.Screen
        name="User Profile"
        component={UserProfile}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="user" color={colors.brand} size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Accounts"
        component={AccountNav}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="coins" color={colors.brand} size={20} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Statistics"
        component={Statistics}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="chart-bar" color={colors.brand} size={20} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default DrawerBar;
