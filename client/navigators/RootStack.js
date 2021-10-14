import React from "react";

//colors
import { Colors } from "../loginComponents/styles";
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Inicio from "../screens/Inicio";
import RegisterExntended from "../screens/RegisterExntended";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// credentials context
import { CredentialsContext } from "../loginComponents/CredentialsContext";

// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
function RootStack() {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: "red" }}>
          <Stack.Navigator>
            {!storedCredentials ? (
              <Stack.Screen
                name="LoginStack"
                component={LoginStack}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Main"
                  component={MainStack}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}
// <--------------- ROOT Stack (contiene a LoginStack y MainStack ) --------------->
// <--------------------- LOGIN Stack --------------------->
function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterExntended"
        component={RegisterExntended}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
// <--------------------- LOGIN Stack --------------------->

// <--------------------- MAIN Stack --------------------->
function MainStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "indigo",
          shadowColor: "indigo",
          elevation: 0,
        },
        headerTitleStyle: { color: "white", fontSize: 16 },
        // headerRight: () => <Ionicons name='ios-log-out' color='white' size={30} style={{ marginHorizontal: 15 }}></Ionicons>,
        // headerLeft: () => <Ionicons name='ios-menu' color='white' size={30} style={{ marginHorizontal: 15 }} onPress={() => props.navigation.openDrawer()}></Ionicons>,
      }}
    >
      <Drawer.Screen name="Inicio" component={Inicio} />
    </Drawer.Navigator>
  );
}

export default RootStack;